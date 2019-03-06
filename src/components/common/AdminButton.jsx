import React from 'react';
import {Link} from 'react-router-dom';


export default su => su ? (
  <Link className="nav-item nav-link" to="/settings">
    <i className="fa fa-cog" aria-hidden="true"> </i>
  </Link>
) : <i/>;

