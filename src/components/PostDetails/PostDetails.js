import React, { Component } from 'react';
import './PostDetails.css';

class PostDetails extends Component {
  render() {
    const post = this.props.post;
    if (!post) {
      return <div>Loading</div>;
    }

    return (
      <div>{post.topic}</div>
    );
  }
}

export default PostDetails;
