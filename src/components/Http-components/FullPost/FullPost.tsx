import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.scss';

// interface Ifullpoststate{
//     loadedPost: {
//         title: "",
//         body: "",
//         id: ""
//     }
// }

interface IfullpostProps {
  blockid: any;
}

class FullPost extends Component<IfullpostProps, {}> {
  constructor(props: any) {
    super(props);
  }
  
  state={
      loadedPost:{
        title: "",
        body: "",
        id:""
      }
  }
  

  componentDidUpdate() {
    if (this.props.blockid) {
      if(!this.state.loadedPost||(this.state.loadedPost && this.state.loadedPost.id !== this.props.blockid)){
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.blockid).then(response => {
            
            this.setState({ loadedPost: response.data });
          });
      }
     
    }
  }
  render() {
    let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
    if (this.props.blockid) {
      post = <p style={{textAlign:"center"}}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
