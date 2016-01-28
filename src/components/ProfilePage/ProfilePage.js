
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfilePage.scss';
import Section0 from './Section0';


const title = 'Shain Lafazan';

class ProfilePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <Section0></Section0>


                  

        </div>
      </div>
    );
  }

}

export default withStyles(ProfilePage, s);
