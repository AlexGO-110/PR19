import { useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadInitialPosts = async () => {
            const initialPosts = await fetchPosts(page);
            setPosts(initialPosts);
        };

        loadInitialPosts();
    }, []);

    const loadMorePosts = async () => {
        const nextPage = page + 1;
        const morePosts = await fetchPosts(nextPage);
        setPosts(prevPosts => [...prevPosts, ...morePosts]);
        setPage(nextPage);
    };

    return {
        posts,
        loadMorePosts
    };
};

export default usePosts;
