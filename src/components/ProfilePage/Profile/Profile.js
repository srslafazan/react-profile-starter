import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Profile.scss';
import {Button, Card, Row, Col} from 'react-materialize';

class Profile extends Component {

  render() {
    return (
      <div className={s.root} id='profile'>
        <div className={s.container}>
        	<h1 className={s.heading}>About Me</h1>
          <Row>
            <Col s={12} m={6} l={4} className={s.photoContainer}>
              <img className={s.profileImg} src="shain-downtown.jpg" alt='Shain Lafazan profile photo'/>
            </Col>
            <Col s={12} m={6} l={8} className={s.profileTextContainer}>
              <h2 className={s.subheading}>I <span className={s.code}>{'{'}code{'}'}</span> therefore I am</h2>
              <p className={s.p1}>
                <span className={s.emph}>How do we build beautiful applications that people love to use? </span>
                I write full stack web and mobile applications in Silicon Valley, 
                and every day I look for the best answer to that question.
              </p>
              <p className={s.p2}>
                I recently lead engineering for <span className={s.emphi}>Spot Knocker</span> and web development for the non-profit <span className={s.emphi}>Forte Academy</span>, and I'm taking on new customers.
                I'm a fan of music, hiking, and snow skiing. 
              </p>
              <p className={s.p3}>
                I'm also a huge coffee enthusiast!
                There's nothing I can't learn or build. :)
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default withStyles(Profile, s);
