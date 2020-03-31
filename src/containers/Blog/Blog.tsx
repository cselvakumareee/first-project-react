import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios'; //this axios is referring the instance in axios.tsx
import Posts from '../Blog/Posts/Posts';
import './Blog.scss';
import { Route } from 'react-router';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';
import { Link, NavLink } from 'react-router-dom';

class Blog extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              {/* the activeClassName is used for changing active class name. we can change to activeClassName = my-active. so we can apply css styles to my-active class name*/}
              <li>
                <NavLink exact to="/" activeClassName="active" activeStyle={{color:'#231f20', textDecoration:'overline'}}>
                  Home
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
        <Route exact path="/" component={Posts} />
        <Route path="/new-post" component={NewPost} />
         <Route exact path="/:id" component={FullPost} /> 
        {/* <Route exact path="/" render = {()=><h1>Home</h1>} /> */}
        {/* <section>
                    <FullPost blockid={this.state.seletedPost}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
      </div>
    );
  }
}

export default Blog;
