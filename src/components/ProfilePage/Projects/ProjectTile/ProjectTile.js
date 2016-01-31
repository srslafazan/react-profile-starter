import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProjectTile.scss';
import {Button, Row, Col} from 'react-materialize';

class ProjectTile extends Component {
	render() {
		return (
    		<Col s={12} m={3} l={3} className="offset-l1">
    			<img className={s.projectThumb} src="http://bit.ly/1NIoQcL" />
    			<h2>Project Name</h2>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sagittis augue, ac pharetra enim convallis ac. Donec cursus libero tortor, eget pretium elit aliquet ut.</p>
    			<Button>Check it out!</Button>
    			<Row>
    				<Col s={3} m={3} l={3}>
		    			<img className={s.testmonialImg} src="http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg" />
	    			</Col>
	    			<Col s={9} m={9} l={9}>
		    			<p className={s.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	    			</Col>
    			</Row>
    		</Col>

		)
	}
}

export default withStyles(ProjectTile, s);