import React, { Component } from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import faker from 'faker';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import PostsList from './views/PostsList/PostsList';
import PostDetails from './views/PostDetails/PostDetails';

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
    const posts = (new Array(20)).fill(null).map((item, index) => ({
      id: index + 1,
      image: `https://unsplash.it/500/500?random&i=${index}`,
      topic: faker.lorem.word(),
      body: faker.lorem.paragraphs(20),
      author: faker.name.findName(),
      createdAt: faker.date.past(),
      readingTime: faker.random.number({min: 0, max: 30}),
      title: faker.lorem.words(5)
    }));

    this.setState({posts: posts});
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
                    .find(post => post.id === parseInt(props.match.params.postId))
                }
              />)
            }/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
