import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProjectTile.scss';
import {Button, Row, Col} from 'react-materialize';

class ProjectTile extends Component {
	render() {
		return (


    		<Col s={12} m={4} l={4} className={s.container}>
    			
						<Row>
		    			<h3 className={s.projectTitle}>{this.props.project.name}</h3>
		    			<p className={s.projectDescription}>{this.props.project.description}</p>
							<img className={s.projectImage} src={this.props.project.imageUrl} />	
						</Row>
					
    			<img className={s.referenceImg} src={this.props.project.reference.imageUrl} />
    			<p className={s.referenceQuote}>{this.props.project.reference.quote}</p>
    			<p className={s.referenceName}>-{this.props.project.reference.name}</p>

    		</Col>

		)
	}
}
    			// <Button>Check it out!</Button>

export default withStyles(ProjectTile, s);