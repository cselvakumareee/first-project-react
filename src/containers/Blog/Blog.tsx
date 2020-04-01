import React, { Component, Suspense } from 'react';
//import axios from 'axios';
import axios from '../../axios'; //this axios is referring the instance in axios.tsx
import Posts from '../Blog/Posts/Posts';
import './Blog.scss';
import { Route, Switch, Redirect } from 'react-router';
//import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';
import { Link, NavLink } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
  return import('../Blog/NewPost/NewPost');
});

const NewPostComponent = React.lazy(()=> import('../Blog/NewPost/NewPost'));


class Blog extends Component {
  constructor(props: any) {
    super(props);
  }

  state={
    auth:true
  }

  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              {/* the activeClassName is used for changing active class name. we can change to activeClassName = my-active. so we can apply css styles to my-active class name*/}
              <li>
                <NavLink exact to="/posts" activeClassName="active" activeStyle={{ color: '#231f20', textDecoration: 'overline' }}>
                  Posts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={{
                    pathname: '/new-post', //this is absolute path
                    // pathname :this.props.match.url+'/new-post', //relative path
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  NewPost
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* {this.state.auth? <Route path="/new-post" component={AsyncNewPost} />:null}  */}
         
         {this.state.auth?<Route path="/new-post" render={()=>(<Suspense fallback={<div>Loading...</div>}><NewPostComponent/></Suspense>)}/>:null} 
          <Route path="/posts" component={Posts} />
           <Redirect from="/" to="/posts" /> 
          {/* <Route render={()=><h1>Page not found</h1>}/> */}
        </Switch>
        {/* <Route exact path="/" render = {()=><h1>Home</h1>} /> */}
       
      </div>
    );
  }
}

export default Blog;
