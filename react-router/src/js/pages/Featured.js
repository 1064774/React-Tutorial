import React from "react";
import { Link } from 'react-router';

export default class Featured extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Featured! </h1>
        <Link to='archive'>Go to Archive</Link>
      </div>
    );
  }
}
