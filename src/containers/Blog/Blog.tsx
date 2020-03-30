import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios'; //this axios is referring the instance in axios.tsx
import Posts from '../Blog/Posts/Posts';
import './Blog.scss';
import { Route } from 'react-router';
import NewPost from '../Blog/NewPost/NewPost';
import { Link } from 'react-router-dom';



class Blog extends Component {
    constructor(props:any){
      super(props);
    }
     
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname :'/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>NewPost</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts} />
                <Route path="/new-post" component={NewPost} />
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