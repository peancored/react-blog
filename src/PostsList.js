import React, { Component } from 'react';
import styles from './PostsList.css';

import Post from './Post'

class PostsList extends Component {
  render() {
    const postItems = this.props.posts.map((post) => {
      return (
        <Post
          className={styles.post}
          key={post.id}
          title={post.title}
          image={post.image}
        />
      );
    });

    return (
      <div className={styles.postsList}>
        {postItems}
      </div>
    );
  }
}

export default PostsList;
