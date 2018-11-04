import React, { Component } from 'react';
import './PostsList.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Post from '../../components/Post/Post'

class PostsList extends Component {
  handlePostClick(event, postId) {
    this.props.history.push(`/posts/${postId}`);
  }

  render() {
    if (!this.props.posts) {
      return null;
    }

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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default withRouter(
  connect(mapStateToProps, null)(PostsList)
);
