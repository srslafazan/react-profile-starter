import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Splash.scss';

class Splash extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        	<div>
          </div>
        </div>
      </div>
    );
  }

}
        		// <h1>Shain Lafazan</h1>
        		// <h2 className={s.subheading}>Software Developer</h2>

export default withStyles(Splash, s);
