/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';
import assets from './assets';
import { port } from './config';
import Mailer from 'nodemailer';
import bodyParser from 'body-parser';


const server = global.server = express();

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content').default);

//
// Get Requests
// -----------------------------------------------------------------------------
server.post('/mail', async (req, res, next) => {
  var transporter = Mailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    }
  });
  var mailOptions = {
    from: req.body.email, // sender address
    to: 'srslafazan@gmail.com', // list of receivers
    subject: 'Message from a Portfolio viewer', // Subject line
    text: req.body.info + ' , ' +
      req.body.name + 
      req.body.email + ' , ' + 
      req.body.phone + ' , ' + 
      req.body.site + ' , ', // plaintext body
    html: '<p>' + req.body.info + '</p>' + 
      req.body.name + '<br>' + 
      req.body.email + '<br>' + 
      req.body.phone + '<br>' + 
      req.body.site + '<br>', // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});


//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: 'Shain Lafazan', description: 'Shain Lafazan builds apps.', css: '', body: '', entry: assets.main.js };
    const css = [];
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send(`<!doctype html>\n${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});
