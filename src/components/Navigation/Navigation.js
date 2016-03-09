/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';
import { Button, Row } from 'react-materialize';
import { STDEase } from '../constants';

var pages = [
  {
    name: 'profile',
    location: '/profile',
    sections: [
      'about me',
    ]
  },  
  // {
  //   name: 'blog',
  //   location: '/blog',
  //   sections: [
  //     'about me',
  //   ]
  // },
];


class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  scrollToSection(e) {
    let sectionName = e.target.getAttribute('data-scrollocation')
    let n = $('#' + sectionName)
    $('html, body').animate({ scrollTop: n.offset().top }, 1200, STDEase.InOut);
  }

  render() {
    var pageList = pages.map(function(page){
      return (
        <div style={{display: 'inline',}}>
          <Link className={s.link} to={page.location} >{page.name}</Link>
        </div>
      );
    });

    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        
        <Row> 
          { pageList }
        </Row>
        
        <Row>
          <a className={s.scrollLink} onClick={this.scrollToSection} data-scrollocation='profile'>About Me</a>
          <a className={s.scrollLink} onClick={this.scrollToSection} data-scrollocation='projects'>Projects</a>
          <a className={s.scrollLink} onClick={this.scrollToSection} data-scrollocation='contact'>Contact</a>
        </Row>

      </div>
    );
  }

}

        // <span className={s.spacer}> | </span>
        // <Link className={s.link} to="/contact">Contact</Link>
        // <Link className={s.link} to="/profile">Profile</Link>
        // <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>

export default withStyles(Navigation, s);
