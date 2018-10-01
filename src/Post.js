import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className={`post`}>
        <div className="post__content">
          <div className="post__topic">
            { this.props.topic }
          </div>

          <h2 className="post__title">
            { this.props.title }
          </h2>

          <div className="post__body">
            { this.props.body }
          </div>

          <div className="post__author">
            { this.props.author }
          </div>

          <div className="post__additional-info">
            <div className="post__created-at">
              { `${this.props.createdAt.toLocaleString('en-en', {month: 'short'})} ${this.props.createdAt.getDate()}` }
            </div>

            <div className="post__divider"></div>

            <div className="post__reading-time">
              { `${this.props.readingTime} min reading` }
            </div>
          </div>
        </div>

        <div
          className="post__image"
          style={{backgroundImage: `url(${this.props.image})`}}
          alt="Post">
        </div>

      </div>
    );
  }
}

export default Post;
