
import React from 'react';

import '../App.css';
 import FBIcon from '../social/facebook-icon.png';
 import GithubIcon from '../social/github-icon.png';
 import InstaIcon from '../social/insta-icon.png';
 import TwitterIcon from '../social/twitter-icon.png';

function Footer(){
    return(
          <div className='footer'>
            <div >
              <img className='social-media' title="GitHub" src={GithubIcon} alt="Github"  />
              <img className='social-media' title="Instagram" src={InstaIcon} alt="Instagram"  />
              <img className='social-media' title="Facebook" src={FBIcon} alt="Facebook"  />
              <img className='social-media' title="Twitter" src={TwitterIcon} alt="Twitter"  />
            </div>
          </div>
    )
  }

  export default Footer;