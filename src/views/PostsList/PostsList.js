import React, { Component } from 'react';
import './PostsList.css';
import { withRouter } from 'react-router-dom';

import Post from '../../components/Post/Post'

class PostsList extends Component {
  constructor() {
    super();

    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(event, postId) {
    this.props.history.push(`/post-details/${postId}`);
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
          onClick={(e) => this.handlePostClick(e, post.id)}
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

export default withRouter(PostsList);
