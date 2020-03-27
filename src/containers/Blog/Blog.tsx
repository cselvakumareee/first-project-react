import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Http-components/Post/Post';
import FullPost from '../../components/Http-components/FullPost/FullPost';
import NewPost from '../../components/Http-components/NewPost/NewPost';
import './Blog.scss';

interface Iblogprops {
    title : any

}

class Blog extends Component {
    constructor(props:any){
      super(props);
    }
     state = {
         posts:[]
     }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map((post:any) =>{
               return{
                ...post,
                author:'selva'
               } 
            });
            this.setState({posts:updatedPosts})
            console.log(response);
        })
    }
    render () {
        const posts = this.state.posts.map((post:any) =>{
           return <Post key={post.id} title={post.title} author={post.author}/>;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;