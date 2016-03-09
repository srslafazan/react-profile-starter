/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';
import { Button, Row, Icon } from 'react-materialize';
import { STDEase } from '../constants';
import Router from 'react-routing/src/Router';
import PageKeeper from './PageKeeper';

var pk = new PageKeeper();

class Navigation extends Component {

  constructor(){
    super()
    this.state = {
      menuOpen: false,
      mediaSize: 'desktop',
    }
  }

  static propTypes = {
    className: PropTypes.string,
  };

  scrollToSection(e) {
    let sectionName = e.target.getAttribute('data-scrollocation')
    let n = $('#' + sectionName)
    $('html, body').animate({ scrollTop: n.offset().top }, 1200, STDEase.InOut);
  }
  toggleMobileMenu(e) {
    if(this.state.menuOpen){
      $('#mobileMenu').fadeOut();
      this.setState({ menuOpen: false });
    } else {
      $('#mobileMenu').fadeIn();
      this.setState({ menuOpen: true });
    }
  }
  handleResize() {
    if($(window).width() >= 768){
      $('#mobileMenu').hide();
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState({ currentPageTitle: document.title });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  mixins() { 
    return [ Router.State ];
  } 

  render() {
    var desktopPageList = pk.pages.map(function(page, index){
      if( index < pk.pages.length - 1 ) {
        return (
          <div style={{display: 'inline',}} key={index}>
            <Link className={s.link} to={page.path} >{page.name}</Link>
            <span className={s.spacer}> | </span>
          </div>
        );
      } else {
        return (
          <div style={{display: 'inline',}} key={index}>
            <Link className={s.link} to={page.path} >{page.name}</Link>
          </div>
        );
      }
    });
    var mobilePageList = pk.pages.map(function(page, index){
      return (
        <div key={index}>
          <Link className={s.link} to={page.path} >{page.name}</Link>
        </div>
      );
    });



    var scrollList = pk.currentPage(this.props.path).sections.map((section, index) => {

      return (<a className={s.scrollLink} key={index} onClick={this.scrollToSection} data-scrollocation={section.scrollLocation}>{section.name}</a>);
    });

    return (
      <div className={cx(s.root, this.props.className, 'no-select')} id='shain-nav' role="navigation">

        <div 
          onClick={this.toggleMobileMenu.bind(this)} 
          className={s.menuBarsContainer}
          id='menuBarsContainer'>
          <Icon className={s.menuBars}  small id='menuBars'>menu</Icon>
        </div>

        <div className={s.mobileMenu} id='mobileMenu'>
          <Row>
            { mobilePageList }
          </Row>     
        </div>

        <div className={s.container}>
          <Row>
            { desktopPageList }
          </Row>
          <Row>
            { scrollList }
          </Row>
        </div>

      </div>
    );
  }

}

        // <span className={s.spacer}> | </span>
        // <Link className={s.link} to="/contact">Contact</Link>
        // <Link className={s.link} to="/profile">Profile</Link>
        // <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>

export default withStyles(Navigation, s);
