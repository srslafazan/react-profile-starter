import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';
import {Button} from 'react-materialize';


class Contact extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

        	<h1 className={s.heading}>Want to work together?</h1>
        	<h2 className={s.tagline}>I build your dreams in code.</h2>
        	<Button>Get Started</Button>

        </div>
      </div>
    );
  }

}

export default withStyles(Contact, s);
