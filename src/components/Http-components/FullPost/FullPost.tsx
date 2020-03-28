import React, { Component } from 'react';

import './FullPost.scss';

interface IfullpostProps{
    blockid:any
}

class FullPost extends Component<IfullpostProps,{}> {
    constructor(props:any){
        super(props);
    }
    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.blockid){
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
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