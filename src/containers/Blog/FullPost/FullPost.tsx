import React, { Component } from 'react';
import axios from '../../../axios'; //this axios is referring the instance in axios.tsx
//import axios from 'axios';

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
  match: any
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
  

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate(){
    this.loadData();
  }

  loadData(){
    if (this.props.match.params.id) {
      if(!this.state.loadedPost||(this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)){
        axios.get('/posts/' + this.props.match.params.id).then(response => {
            
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () =>{
    axios.delete('/posts/' + this.props.match.params.id)
    .then(response =>{
      console.log(response);
    });
  }

  render() {
    let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
    // if (this.props.blockid) {
    //   post = <p style={{textAlign:"center"}}>Loading...</p>;
    // }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
