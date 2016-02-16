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
import Button from 'react-materialize';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  scrollToSection(e) {
    let sectionName = e.target.getAttribute('data-scrollocation')
    let n = $('#' + sectionName)
    $('html, body').animate({ scrollTop: n.offset().top }, 800, 'easeInExpo');
  }

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <a className={s.link} onClick={this.scrollToSection} data-scrollocation='profile'>Profile</a>
        <span className={s.spacer}> | </span>
        <a className={s.link} onClick={this.scrollToSection} data-scrollocation='projects'>Projects</a>
        <span className={s.spacer}> | </span>
        <a className={s.link} onClick={this.scrollToSection} data-scrollocation='contact'>Contact</a>
      </div>
    );
  }

}
        // <Link className={s.link} to="/contact">Contact</Link>
        // <Link className={s.link} to="/profile">Profile</Link>
        // <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>

export default withStyles(Navigation, s);
