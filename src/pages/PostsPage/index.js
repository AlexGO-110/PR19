import React from 'react';
import PostsList from '../../features/Posts/ui/PostsList';
import './PostsPage.module.css';

const PostsPage = () => {
    return (
        <div className="posts-page">
            <h1>Посты</h1>
            <PostsList />
        </div>
    );
};

export default PostsPage;
