import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Splash.scss';

class Splash extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        	<div>
            <h1>J.V. Estolas</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Splash, s);
