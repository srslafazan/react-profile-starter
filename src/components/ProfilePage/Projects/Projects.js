import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.scss';
import {Row, Col} from 'react-materialize';
import ProjectTile from './ProjectTile';

var projects = [

	{
		name: "Spot Knocker",
		description: "Peer-to-peer advertising that's rocking the ad world.",
		imageUrl: "spotknockerProject.png",
		reference: {
			name: "JV Estolas",
			title: "Engineer, Spot Knocker",
			quote: "\"Shain is a champion of the free world, justice, coffee, and code.\"",
			imageUrl: "jv.jpg",
		}
	},
	{
		name: "Forte",
		description: "Sharing music performance with underprivileged youths.",
		imageUrl: "forteProject.png",
		reference: {
			name: "Hareesh Puliyedath",
			title: "Engineer, Vlocity",
			quote: "\"Shain is a the kind of person you would always want in your team.\"",
			imageUrl: "hareesh_puliyedath.jpg",
		}
	},
	{
		name: "Capuchin",
		description: "Split the bill with ease, like it was always meant to be.",
		imageUrl: "capuchinProject.png",
		reference: {
			name: "Skyler Gonsalves",
			title: "Engineer, Moody",
			quote: "\"Shain's ability to efficiently pick up new technologies allows him to tackle any challenge.\"",
			imageUrl: "brian_schmidt.jpg",
		}
	},

];


class Projects extends Component {

  render() {
    return (	
	<div className={s.container} id='projects'>
		<h1 className={s.heading}>Recent Projects</h1>	        		
		<Row>
				<ProjectTile project={projects[0]}></ProjectTile>
		    <ProjectTile project={projects[1]}></ProjectTile>
		    <ProjectTile project={projects[2]}></ProjectTile>	
		</Row>	
	</div>
    );
  }

}

export default withStyles(Projects, s);
