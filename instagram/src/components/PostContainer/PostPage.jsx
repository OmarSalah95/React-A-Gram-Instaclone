import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import React from 'react';

const PostPage = (props) => {
    return ( 
        <>
            <SearchBar 
                searchPosts={props.searchPostsHandler}
            />
            <PostContainer 
                posts={props.posts} 
            />
        </>
     );
}
 
export default PostPage;