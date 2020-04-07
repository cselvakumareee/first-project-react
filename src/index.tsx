import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import CounterReducer from './Store/Reducer/Counter';
import ResultReducer from './Store/Reducer/Result';

import { Provider } from 'react-redux';

import Home from './components/home/Home';
import User from './components/user/User';
import Contact from './components/contact/Contact';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

const rootReducer = combineReducers({
    ctr:CounterReducer,
    res: ResultReducer
});

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'OTP TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request =>{
    console.log("interceptor"+request);
    return request;
}, error=>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response=>{
    console.log(response);
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error);
})

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

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
