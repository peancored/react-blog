import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostDetails.css';
import { withRouter } from 'react-router-dom';

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

const mapStateToProps = (state, ownState) => {
  return ({
    post: state.posts.items
      .find(post => post.id === ownState.match.params.postId)
  });
};

export default withRouter(connect(mapStateToProps, null)(PostDetails));
