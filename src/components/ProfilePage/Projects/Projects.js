import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.scss';
import {Row, Col} from 'react-materialize';
import ProjectTile from './ProjectTile';

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {data: []}
	}
	// --- myProjects.json contains an array of objects which will be rendered to this section of the portfolio.
	// --- I tried to load the myProjects.json file using server.js in the src directory but had trouble with the es6 syntax.
	// --- The main error I was getting was referring to "this.props.url". The browser console said "cannot find ulr of undefined".
	// ---  I'll fix this within the next day or two. 
	// --- For now, we are getting the myProjects.json from within the ProfilePage directory.
	// --- see ProfilePage.js line 34 for data and pollInterval properties.
	// --- server.js lines 36-53 contains code that I was playing around with. 
	// --- I most likely did not use proper routing with the url property. See ProfilePage.js lines 35-36.
	// ---				- J.V.

	loadProjectsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this), 
			error: function (xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	};
	componentDidMount() {
		this.loadProjectsFromServer();
		setInterval(this.loadProjectsFromServer.bind(this), this.props.pollInterval);
	};
    render() {
	    return (	
	    	<div className={s.container}>
				<Row>
					<Col s={12} m={4} l={4} className="offset-l4">
						<h1>My Projects</h1>	        	
					</Col>
				</Row>
				<Row>
				    <ProjectTile data={this.state.data} />
			    </Row>
	    	</div>
	    );
	};
}

export default withStyles(Projects, s);
