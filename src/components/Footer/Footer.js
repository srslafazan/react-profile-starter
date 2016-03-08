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
import SVGIcon from '../SVGIcon';

import { Button, Icon } from 'react-materialize';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

        <div className={s.iconBar}>
          
          <a href='https://www.facebook.com/slafazan' className={s.footerIconLink} >
            <img src='facebookLogo.png' alt='Facebook logo' className={s.footerIcon} />
          </a>
          <a href='https://www.linkedin.com/in/shainlafazan' className={s.footerIconLink} >
            <img src='linkedInLogo.png' alt='LinkedIn logo' className={s.footerIcon} id={s.linkedInIcon}/>
          </a>
          <a href='https://github.com/srslafazan' className={s.footerIconLink} id={s.gitHubIconLink} >
            <img src='gitHubLogo.png' alt='GitHub logo' className={s.footerIcon} id={s.gitHubIcon}/>
          </a>
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

export default withStyles(Footer, s);
