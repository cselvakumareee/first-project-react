import React, { Component } from 'react';
import Post from '../../../components/Http-components/Post/Post';
import axios from '../../../axios';
import './Posts.scss';

class Posts extends Component {
  state = {
    posts: [],
    seletedPost: null,
    error: false
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post: any) => {
          return {
            ...post,
            author: 'selva'
          };
        });
        this.setState({ posts: updatedPosts });
        console.log(response);
      })
      .catch(error => {
        //console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id: any) => {
    this.setState({ seletedPost: id });
  };
  
  render() {
    let posts: any = <p style={{ textAlign: 'center' }}>something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post: any) => {
        return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />;
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
