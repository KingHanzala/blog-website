import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PreviewPost from './PreviewPost';
import './../styles/Home.css';
import getBackendURL from '../config.js';

const backendURL = getBackendURL();

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${backendURL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-post-list">
      <div className="blog-post-title">Posts</div>
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
      {posts.map(post => (
        <PreviewPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;