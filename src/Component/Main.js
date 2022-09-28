import React from 'react';
import ProfileImage from '../image/profile-image.jpg';

import { Icon } from 'semantic-ui-react'


function Main(){
  
  return(
        <div className='main'>
          <img className='profile-image' title="Profile" src={ ProfileImage } alt="Profile"  />
            <div className='name'>Laura Smith</div>
            <div className='title'>Frontend Developer</div>
            <div className='personal-website'>laurasmith.website</div>
            <div className='buttons'>
              <button className='button button-email' ><Icon disabled name='users' /> Email</button>
              <button className='button button-linkedin'>LinkedIn</button>
            </div>
          <div className='main-body-heading main-body-margin'>About</div>  
          <div className='main-body-text main-body-margin'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
          <div className='main-body-heading main-body-margin'>Interests</div>
          <div className='main-body-text main-body-margin-bottom'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
        </div>
          )
  }

  export default Main;