import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        <div className="post-link" key={post._id}>
          <Link to={`/post/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
