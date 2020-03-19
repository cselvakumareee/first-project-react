import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class Contact extends React.Component {
  render() {
    return (
      <div>
    <h1>Contact</h1>
    <button>click me</button>
    <a href="#" className="button"><Link to="/home">Back to home</Link></a>
    </div>
    );
  }
}
export default Contact