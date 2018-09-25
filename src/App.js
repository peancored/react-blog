import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';
import PostsList from './PostsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => posts.map((post, index) => {
        post.image = `https://unsplash.it/500/500?random&i=${index}`;
        return post;
      }))
      .then(posts => this.setState({posts: posts}));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PostsList posts={this.state.posts} />
      </React.Fragment>
    );
  }
}

export default App;
