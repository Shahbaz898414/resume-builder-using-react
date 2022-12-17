import React from 'react';
// import {Link} from 'react-router-dom';

import './Header.css';
import resumeimg from '../../assert/resumeimg.svg';

function Header() {
  return (
    <div className="container">
      <div className="left-side">
        <p className="head">A <span>Resume</span> That stands out!</p>
        <p className="head">Make your own resume <span>It's free</span></p>
      </div>
      <div className="right-side">
          <img src={resumeimg} alt="Resume" />
      </div>
      
    </div>
  )
}

export default Header