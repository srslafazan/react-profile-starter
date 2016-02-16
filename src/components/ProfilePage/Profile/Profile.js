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
              <h2 className={s.subheading}>I {'{'}code{'}'} therefore I am</h2>
              <p>
                How do we build beautiful applications that people love to use?

                I write full stack web and mobile applications in Silicon Valley, 
                and every day I work to find the best answer to that question.

                I taught iOS, Ruby on Rails, MEAN stack courses and more for Coding Dojo Silicon Valley.
              </p>
              <br/>
              <p>
                Currently, I lead development on a web application for Forte, built in Rails, 
                and lead engineering on a React / Node MVP for Spot Knocker.

                I'm a huge fan of music, hiking, and snow skiing. 

                Also, I'm a huge coffee enthusiast!

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
