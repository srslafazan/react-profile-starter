import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProjectTile.scss';
import {Button, Row, Col, Chip, Tag} from 'react-materialize';

class ProjectTile extends Component {
	render() {
		return (

    		<Col s={12} m={12} l={4} className={s.container}>
					
					<Row>
	    			<h3 className={s.projectTitle}>{this.props.project.name}</h3>
	    			<p className={s.projectDescription}>{this.props.project.description}</p>
						<img className={s.projectImage} src={this.props.project.imageUrl} alt={this.props.project.imageAlt} />	
					</Row>

					<Row>
						<Col s={12}>
					    <p className={s.referenceQuote}>{this.props.project.reference.quote}</p>
					    <br />
					    <Chip>
					      <image src={this.props.project.reference.imageUrl} alt={this.props.project.reference.imageAlt} />
					      {this.props.project.reference.name} - {this.props.project.reference.title}
					    </Chip>
					  </Col>
					</Row>


    		</Col>

		)
	}
}

					// <Col s={12} m={12} l={5} >
	    // 			<img className={s.referenceImg} src={this.props.project.reference.imageUrl} alt={this.props.project.reference.imageAlt} />
	    // 		</Col>
	    // 		<Col s={12} m={12} l={7} >
	    // 			<p className={s.referenceQuote}>{this.props.project.reference.quote}</p>
	    // 			<p className={s.referenceName}>&mdash;{this.props.project.reference.name}</p>
	    // 			<p className={s.referenceTitle}>{this.props.project.reference.title}</p>
	    // 		</Col>


export default withStyles(ProjectTile, s);
