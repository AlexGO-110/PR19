import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import usePosts from '../model/usePosts';
import Button from '../../../shared/ui/Button';

const PostsList = () => {
    const { posts, loadMorePosts } = usePosts();

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <Button onClick={loadMorePosts}>Загрузить ещё</Button>
        </div>
    );
};

export default PostsList;
