import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Profile.scss';
import {Button, Card, Row, Col} from 'react-materialize';

class Profile extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        	<Row>
        		<Col m={3} s={3} l={3}>
        			<img className={s.profileImg} src="jv.jpg" />
        		</Col>
        	</Row>
        	<h1>About Me</h1>
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sagittis augue, ac pharetra enim convallis ac. Donec cursus libero tortor, eget pretium elit aliquet ut. Suspendisse interdum interdum ex lacinia cursus. Integer in risus lacinia, dictum augue sed, tincidunt orci. Sed ullamcorper eleifend dui, vel tristique diam porta vel. Morbi consectetur augue ac sapien luctus egestas. Proin non sagittis leo. Morbi eu finibus turpis. Vivamus porttitor egestas enim. Pellentesque at justo ut lacus pharetra maximus nec et risus. Suspendisse quis lectus id quam congue scelerisque a non erat. Donec porttitor, massa ullamcorper pellentesque rutrum, eros libero venenatis purus, ac aliquam metus sem vitae orci.</p>
        </div>
      </div>
    );
  }

}

export default withStyles(Profile, s);
