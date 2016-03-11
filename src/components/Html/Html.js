/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  trackingCode() {
    return ({ __html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','${googleAnalyticsId}','auto');ga('send','pageview');`,
    });
  }

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={this.props.description} />
        <meta name="keywords" content='shain lafazan app developer software engineer web website mobile ios android portfolio profile application silicon valley' />
        <meta name="author" content='Shain Lafazan' />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css" />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js'></script>
        <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />

        <script src="https://html2canvas.hertzen.com/build/html2canvas.js" language="javascript"></script>

        <meta name="google-site-verification" content="IdWIRDw4xphA-QInOfH6qp7UA5sRjRQm9f1I11B4yoo" />

      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={this.props.entry}></script>
        <script dangerouslySetInnerHTML={this.trackingCode()} />
      </body>
      </html>
    );
  }

}

export default Html;
