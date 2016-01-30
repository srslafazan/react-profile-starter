/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';
import Icon from '../Icon';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

        <div className={s.iconBar}>
          <div className={s.footerIcon}>
            <Icon size="2.5rem" icon="post-facebook" />
          </div>
          <div className={s.footerIcon}>
            <Icon size="2.5rem" icon="post-linkedin" />
          </div>
          <div className={s.footerIcon}>
            <Icon size="2.5rem" icon="post-github" />
          </div>
          <div className={s.footerIcon}>
            <Icon size="2.5rem" icon="email" />
          </div>
        </div>

        <div className={s.lowerText}>
          <span className={s.text}>© Shain Lafazan, 2016</span>
          <span className={s.spacer}>·</span>
          <span className={s.text}>Hand-built with ReactJS</span>
        </div>
        </div>
      </div>
    );
  }

}

          // <Link className={s.link} to="/">Home</Link>
// <Link className={s.link} to="/not-found">Not Found</Link>

export default withStyles(Footer, s);
