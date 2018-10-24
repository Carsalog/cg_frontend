import React from 'react';
import UserNav from './common/userNav';
import {Link} from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <Link className="navbar-brand h4" to="/" id="logo">
      <span style={{color: "#007bff"}}>C</span>
      <span>arsalog</span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      </div>
      <div className="navbar-nav ml-auto">
        <UserNav/>
      </div>
    </div>
  </nav>
);

export default Nav;
