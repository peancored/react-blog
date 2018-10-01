import React, { Component } from 'react';
import './PostsList.css';

import Post from './Post'

class PostsList extends Component {
  render() {
    const postItems = this.props.posts.map((post) => {
      return (
        <Post
          key={post.id}
          topic={post.topic}
          body={post.body}
          author={post.author}
          createdAt={post.createdAt}
          readingTime={post.readingTime}
          title={post.title}
          image={post.image}
        />
      );
    });

    return (
      <div className="posts-list">
        {postItems}
      </div>
    );
  }
}

export default PostsList;
