import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Splash.scss';
import {Button, Icon} from 'react-materialize';
import SVGIcon from '../../SVGIcon';

class Splash extends Component {

  scrollDown() {
    var n = $(window).height();
    console.log(n);

    $('html, body').animate({ scrollTop: n }, 800, 'easeInExpo');

    // $('html, body').animate({
      // scrollTop: $(destination).offset().top
    // }, n);

    return true;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.logoContainer}>
            <Icon className={s.logo} large>invert_colors</Icon>
          </div>
          <div className={s.lowerText}>
            <h1 className={s.heading}>J.V. Estolas</h1>
            <h2 className={s.subheading}>Full Stack Web Developer</h2>
            <Button>AVAILABLE FOR HIRE</Button>
          </div>
          <div className={s.bottomTextContainer}>
            <a id='learn-more' className={s.bottomLink} onClick={this.scrollDown}>Learn more about what I do</a>
            

            <a id='learn-more-chevron' onClick={this.scrollDown}><SVGIcon size="3.0rem" icon="keyboard-arrow-down" className={s.arrowIcon} fillColor="white" /></a>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Splash, s);
