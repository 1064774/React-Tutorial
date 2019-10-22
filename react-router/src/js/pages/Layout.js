import React from "react";
import { Link } from 'react-router';

export default class Layout extends React.Component {

  navigate() {
    this.props.history.replaceState(null, '/')
  }
  render() {
    return (

      <div>
        <h1>Welcome to React Router! </h1>
        { this.props.children }
        <Link to='archive'>Go to Archive</Link>
        <Link to='settings'>Go to Settings</Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
