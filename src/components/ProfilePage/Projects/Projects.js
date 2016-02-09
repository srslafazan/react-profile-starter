import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.scss';
import {Row, Col} from 'react-materialize';
import ProjectTile from './ProjectTile';

class Projects extends Component {

  render() {
    return (	
	<div className={s.container} id='projects'>
		<Row>
			<Col s={12} m={4} l={4} className="offset-l4">
				<h1>My Projects</h1>	        	
			</Col>
		</Row>
		<Row>
		    <ProjectTile></ProjectTile>
		    <ProjectTile></ProjectTile>
		    <ProjectTile></ProjectTile>
	    </Row>
	</div>
    );
  }

}

export default withStyles(Projects, s);
