import React, {Component} from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = e => {
    this.setState({ searchValue:(e.target.value)});
    console.log(this.state.searchValue);
  };

  render() {
    return (
      <>
        <PostPage
          searchPosts={this.searchPostsHandler}
          posts={this.state.posts} 
        />
      </>
    );
  }
}

export default App;
