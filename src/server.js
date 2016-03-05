/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import fs from 'fs';
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
// Hooking up a pseudo-database file in json format
//
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
var PROJECTS_FILE = path.join(__dirname, './content/myProjects.json');

server.use('/myProjects', function(req, res) {
  fs.readFile(PROJECTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    // res.json(JSON.parse(data));
  });
});
// /End json pseudo-database

//
// Get Requests
// -----------------------------------------------------------------------------
server.post('/mail', async (req, res, next) => {
  var transporter = Mailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: 'postmaster@sandbox98d8af632e554413b976bed237d13ab8.mailgun.org',
      pass: '2da4d38ca65ab4385daa91b07e4a6e2c',
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

  const description = 'Shain Lafazan is a Software Engineer, Full Stack Web and Mobile Developer in Silicon Valley.';
  const title = 'Shain Lafazan | Profile';
  
  try {
    let statusCode = 200;
    const data = { title: title, description: description, css: '', body: '', entry: assets.main.js };
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
