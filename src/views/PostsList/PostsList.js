import React, { Component } from 'react';
import './PostsList.css';

import Post from '../../components/Post/Post'

class PostsList extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

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
          onClick={this.handleClick}
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
