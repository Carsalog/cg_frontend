import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import Icons from "./Icons";


export class UserNav extends Component {

  render() {
    const {user} = this.props;

    if (user) return (
      <React.Fragment>
        <Link className="nav-item nav-link" to="/profile">
          <span className="pr-1">Welcome {user.firstName} {user.lastName}!</span>
          <i className="fa fa-user" aria-hidden="true"> </i>
        </Link>
        <Link className="nav-item nav-link" to="/logout">
          <span className="icon-text pr-2">Sign out</span>
          <i className="fa fa-sign-out" aria-hidden="true"> </i>
        </Link>
      </React.Fragment>);
    else return (
      <React.Fragment>
        <Icons classes="nav-item nav-link" text={true}/>
        <Link className="nav-item nav-link" to="/login">
          <span className="icon-text pr-2">Sign in</span>
          <i className="fa fa-sign-in" aria-hidden="true"/>
        </Link>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  })
)(UserNav);