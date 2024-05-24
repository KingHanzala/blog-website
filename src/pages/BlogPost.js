import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/BlogPost.css'
import getBackendURL from '../config.js';

const backendURL = getBackendURL();

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${backendURL}/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsAdmin(true);
    }
}, []);

  if (!post) return(
  <div class="blogpost">
    <div className="loading">
      <div className="spinner"></div>
    </div>
  </div>);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`${backendURL}/api/posts/${id}`, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log('Post deleted');
      window.location.href = '/'
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div class="blogpost">
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
      <div class="blogpost-title">{post.title}</div>
      <div class="blogpost-image">
      <img src={post.image} alt={post.title} />
      </div>
      <div class="blogpost-content">
      <p>{post.content}</p>
      </div>
      <div class="blogpost-links">
      <ul>
        {post.links.map((link, index) => (
          <li key={index}><a href={link} target="_blank" rel="noreferrer">{link}</a></li>
        ))}
      </ul>
      </div>
      {isAdmin && (
        <button onClick={handleDelete}>Delete Post</button>
      )}
    </div>
  );
};

export default BlogPost;
