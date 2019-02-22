import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
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
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={this.state.posts.filter(post => post.username.includes(this.state.searchValue))} 
        />
      </div>
    );
  }
}

export default PostsPage;