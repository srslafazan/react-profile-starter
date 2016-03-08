import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Splash.scss';
import {Button, Icon} from 'react-materialize';
import SVGIcon from '../../SVGIcon';
import { STDEase } from '../../constants';


class Splash extends Component {

  scrollDown() {
    var n = $(window).height();
    $('html, body').animate({ scrollTop: n }, 1200, STDEase.InOut);
    console.log(Cosntants);
    console.log(Cosntants.STDEaseInOut);
  }
  scrollToBottom() {
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 1200, STDEase.InOut);
  }

  render() {
    return (
      <div className={s.root} id='splash'>
        <div className={s.container}>
          <div className={s.lowerText}>
            <h1 className={s.heading}>Shain Lafazan</h1>
            <h2 className={s.subheading}>Software Engineer</h2>
            <h2 className={s.subheading2}>Full Stack Web and Mobile Development</h2>
            <Button onClick={this.scrollToBottom} >Get a Quote</Button>
          </div>
          <div className={s.bottomTextContainer}>
            <a id='learn-more' className={s.bottomLink} onClick={this.scrollDown}>Learn more about what I do</a>
            <a id='learn-more-chevron' onClick={this.scrollDown} className={s.arrowIcon}>
              <SVGIcon size="3.0rem" icon="keyboard-arrow-down" className={s.arrowIcon} fillColor="white" />
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Splash, s);
