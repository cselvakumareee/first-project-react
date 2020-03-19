import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import Home from './components/home/Home';
import User from './components/user/User';
import Contact from './components/contact/Contact';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// const routing = (
// <Router>
// <div>
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/user">Users</Link>
//   </li>
//   <li>
//     <Link to="/contact">Contact</Link>
//   </li>
// </ul>
//   <Route exact path="/" component={Home} />
//   <Route path="/user" component={User} />
//   <Route path="/contact" component={Contact} />
// </div>
// </Router>
// )

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
