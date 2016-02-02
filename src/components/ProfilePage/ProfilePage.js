
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfilePage.scss';
import Splash from './Splash';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';

import {Parallax, Background} from 'react-parallax';


const title = 'J.V. Estolas';

class ProfilePage extends Component {

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
          <Parallax strength={300} bgImage={"dummy_bg_1.png"}>
            <Splash></Splash>          
          </Parallax>
          <Profile></Profile>
          <Projects></Projects>
          <Contact></Contact>

        </div>
      </div>
    );
  }

}

export default withStyles(ProfilePage, s);