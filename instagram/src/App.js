import React, {Component} from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

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
  };

  render() {
    console.log(this.state.searchValue);
    console.log(this.state.posts.filter(post => post.username.includes(this.state.searchValue))); 
    return (
      <>
        <SearchBar 
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer 
          posts={this.state.posts.filter(post => post.username.includes(this.state.searchValue))} 
        />
      </>
    );
  }
}

export default App;
