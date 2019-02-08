import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


export class Social extends React.Component {
  render() {
    const {social} = this.props.config;
    return (social.map(item => (
      <Link to={item.url} className="p3 h1" key={item._id}>
        <i className={item.class} aria-hidden="true"> </i>
      </Link>
    )));
  }
}

export default connect(state => ({config: state.config}))(Social);