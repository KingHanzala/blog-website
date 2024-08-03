import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
        const response = await axios.get(`${backendURL}/api/post/${id}`);
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

  if (!post) return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );

  const handleDelete = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`${backendURL}/api/post/${id}`, {
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
    <div className="content-end">
    <div className="pb-4 pt-4 flex justify-center">
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-inner">
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}
      <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex justify-center">{post.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row size-48 md:size-full">
        {post.image && (
          <div className="mb-4 md:mb-0 md:mr-4 object-none">
            <img className="w-full md:w-80 h-auto rounded-lg " src={post.image} alt={post.title} />
          </div>
        )}
        <div className='pt-4 pb-2'>
          <div className="mb-4 text-gray-700 dark:text-gray-300">
            <p>{post.description}</p>
          </div>
          {post.links && (
            <div className="mb-4">
              <ul>
                {post.links.map((link, index) => (
                  <li key={index}>
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href={link} target="_blank" rel="noreferrer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isAdmin && (
            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete Post</button>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BlogPost;
