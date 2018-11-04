import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import { withRouter } from 'react-router-dom';

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar/Navbar';
import PostsList from './components/PostsList/PostsList';
import PostDetails from './components/PostDetails/PostDetails';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Redirect exact from="/" to="/posts"/>
          <Route
            exact
            path="/posts"
            component={PostsList}
          />
          <Route
            path="/posts/:postId"
            component={PostDetails}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts
};

export default withRouter(connect(null, mapDispatchToProps)(App));
