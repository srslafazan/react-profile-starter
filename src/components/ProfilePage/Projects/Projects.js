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
			title: "Software Engineer @ Spot Knocker",
			quote: "\"Shain is a champion of the free world, justice, code, and coffee.\"",
			imageUrl: "https://media.licdn.com/media/p/8/005/043/312/181bf88.jpg",
		}
	},
	{
		name: "Forte",
		description: "Sharing music performance with underprivileged youths.",
		imageUrl: "forteProject.png",
		reference: {
			name: "Daniel Kim",
			title: "CEO @ Forte",
			quote: "\"Shain helped us take Forte from an idea to a reality.\"",
			imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/000/2b4/0cc/10cd96c.jpg",
		}
	},
	{
		name: "Capuchin",
		description: "Split the bill with ease, like it was always meant to be.",
		imageUrl: "capuchinProject.png",
		reference: {
			name: "Skyler Gonsalves",
			title: "Technical Project Manager",
			quote: "\"Shain built scalable features and brought deep technical knowledge to the team.\"",
			imageUrl: "https://media.licdn.com/media/p/8/005/091/3a2/3bdd59b.jpg",
		}
	},

];


class Projects extends Component {
	constructor() {
		super();
		this.state = {data: []}
	}
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
