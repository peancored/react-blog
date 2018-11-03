import React, { Component } from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import faker from 'faker';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import PostsList from './components/PostsList/PostsList';
import PostDetails from './components/PostDetails/PostDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(postId) {
  }

  componentDidMount() {
    fetch('http://localhost:9000/posts')
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path="/"
            render={
              (props) => (
                <PostsList
                  { ...props }
                  posts={this.state.posts}
                  handlePostClick={this.handlePostClick}
                />
              )
            }/>
          <Route
            exact
            path="/post-details/:postId"
            render={
              (props) => (<PostDetails
                { ...props }
                post={
                  this.state.posts
                    .find(post => post.id === props.match.params.postId)
                }
              />)
            }/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
