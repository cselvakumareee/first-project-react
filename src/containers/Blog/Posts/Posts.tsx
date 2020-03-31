import React, { Component } from 'react';
import Post from '../../../components/Http-components/Post/Post';
import axios from '../../../axios';
import './Posts.scss';
import { Link } from 'react-router-dom';


class Posts extends Component {
  state = {
    // posts: [
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "title1",
    //     "author":"selva"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 2,
    //     "title": "title2",
    //     "author":"selva"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 3,
    //     "title": "title3",
    //     "author":"selva"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 4,
    //     "title": "title4",
    //     "author":"selva"
    //      }],
    posts:[],
    seletedPost: null,
    error: false
  };

  componentDidMount() {
    console.log('posts' + this.props);
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
   
     let posts:any = <p style={{ textAlign: 'center' }}>something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post: any) => {
        return (
           <Link to={'/'+post.id} key={post.id}>
          <Post title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
           </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
