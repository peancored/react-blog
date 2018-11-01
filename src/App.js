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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked');
  }

  componentDidMount() {
    const posts = (new Array(20)).fill(null).map((item, index) => ({
      id: faker.random.uuid(),
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
      <Switch>
        <Route
          exact
          path="/"
          render={
            (props) => (
              <PostsList
                { ...props }
                posts={this.state.posts}
                handleClick={this.handleClick}
              />
            )
          }/>
      </Switch>
    );
  }
}

export default App;
