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
    			// <Row s={12} m={12} l={12} className={s.topRow}>
	    		// 	<img className={s.projectThumb} src={this.props.project.imageUrl} />
    			// </Row>

    			// <Row className={s.projectRow} s={4} m={12} l={12}>
    			// 	<Col s={3} m={3} l={3}>
	    		// 	</Col>
	    		// 	<Col s={9} m={9} l={9}>
	    		// 	</Col>
    			// </Row>
    			// <Button>Check it out!</Button>

export default withStyles(ProjectTile, s);