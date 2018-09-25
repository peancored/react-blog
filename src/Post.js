import React, { Component } from 'react';
import styles from './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img
          className={styles.image}
          src={this.props.image}
          alt="Post" />

        <h2 className={styles.title}>
          { this.props.title }
        </h2>
      </div>
    );
  }
}

export default Post;
