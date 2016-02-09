import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';
import {Button, Modal, Row, Input, Icon} from 'react-materialize';


class Contact extends Component {

  render() {
    return (
      <div className={s.root} id='contact'>
        <div className={s.container}>

        	<h1 className={s.heading}>Want to work together?</h1>
        	<h2 className={s.tagline}>I build your dreams in code.</h2>

				  <Modal
					  header='Tell me all about it!'
					  trigger={
					    <Button waves='light'>Get Started</Button>
					}>
					  
					  
					  <p className={s.explanation}>What are you looking for and how can I help? I build websites and mobile apps, front-to-back.</p>
					  <Row>
					    <Input s={6} label="Name"><Icon>account_circle</Icon></Input>
					    <Input s={6} label="Email Address"><Icon>email</Icon></Input>
					    <Input s={6} label="Phone number"><Icon>phone</Icon></Input>
					    <Input s={6} label="Website"><Icon>website</Icon></Input>
					    
					    <label>Textarea</label>
					    <textarea id={s.textarea1} className='materialize-textarea' length="120"
					    	placeholder='Tell me about your project... &#13;&#10;
					    		1) What is it? &#13;&#10;
    							2) How can I help? &#13;&#10;
									3) What is your timeline? &#13;&#10;
									4) What is your budget?'
							>
							</textarea>

					   	<Input type='submit' className='btn' value='SUBMIT YOUR PROJECT'></Input>

						</Row>


					</Modal>



        </div>
      </div>
    );
  }

}

export default withStyles(Contact, s);
