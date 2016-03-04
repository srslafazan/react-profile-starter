
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfilePage.scss';
import Splash from './Splash';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';
import {Parallax, Background} from 'react-parallax';


const title = 'Shain Lafazan';

  var myProjects =  [
  {
    "id": 101,
    "projName": "Project 1",
    "projThumbnail": "http://bit.ly/1NIoQcL",
    "projDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sagittis augue, ac pharetra enim convallis ac. Donec cursus libero tortor, eget pretium elit aliquet ut.",
    "testimonialAuthorImg": "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg",
    "testimonialAuthor": "Author Name",
    "testimonial": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 102,
    "projName": "Project 2",
    "projThumbnail": "http://bit.ly/1NIoQcL",
    "projDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sagittis augue, ac pharetra enim convallis ac. Donec cursus libero tortor, eget pretium elit aliquet ut.",
    "testimonialAuthorImg": "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg",
    "testimonialAuthor": "Author Name",
    "testimonial": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 103,
    "projName": "Project 3",
    "projThumbnail": "http://bit.ly/1NIoQcL",
    "projDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin sagittis augue, ac pharetra enim convallis ac. Donec cursus libero tortor, eget pretium elit aliquet ut.",
    "testimonialAuthorImg": "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg",
    "testimonialAuthor": "Author Name",
    "testimonial": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

class ProfilePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Parallax strength={300} bgImage={"bg-blur-dark.jpg"} className={s.parallax}>
            <Splash></Splash>          
          </Parallax>
          <Profile />
          <Projects data={myProjects} pollInterval={2000} />
          <Contact />
        </div>
      </div>
    );
  }

}

export default withStyles(ProfilePage, s);
