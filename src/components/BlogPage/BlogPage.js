/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlogPage.scss';

import { Parallax, Background } from 'react-parallax';
import Splash from './Splash';
import Profile from '../ProfilePage/Profile';
import Contact from '../ProfilePage/Contact';

const title = 'Shain\'s Blog';

class BlogPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Parallax 
            strength={300} 
            bgImage={"bg-blur-dark.jpg"} 
            className={s.parallax} 
            alt='typewriter background'>
            
            <Splash
              heading="Mediocre At Best"
              subheading='Tales of a Software and Life Hacker'
              subheading2="Hold up! Scroll down if you want to learn about stuff."
              buttonText='Contact Me'
              path={this.props.path}
            ></Splash>          
          </Parallax>




          <h1 id='blogs'>The blogs are coming for you.</h1>
          <p style={{textAlign: 'center'}}>They've been getting lost lately. Don't worry, I've got a very experienced team of experts looking for them, right now. :)</p>

          <Profile />
          <Contact />
        </div>
      </div>
    );
  }

}

export default withStyles(BlogPage, s);
