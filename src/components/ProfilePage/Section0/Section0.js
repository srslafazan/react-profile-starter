import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section0.scss';

class Section0 extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        </div>
      </div>
    );
  }

}

export default withStyles(Section0, s);
