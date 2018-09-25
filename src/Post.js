import React, { Component } from 'react';
import styles from './Post.css';

class Post extends Component {
  static defaultProps = {
    className: ''
  };

  render() {
    return (
      <div className={`${styles.post} ${this.props.className}`}>
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
