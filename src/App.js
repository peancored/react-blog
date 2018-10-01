import React, { Component } from 'react';
import faker from 'faker';
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
      <React.Fragment>
        <Navbar />
        <PostsList posts={this.state.posts} />
      </React.Fragment>
    );
  }
}

export default App;
