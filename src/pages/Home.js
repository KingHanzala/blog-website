import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogCard, BlogCardSkeleton } from './PreviewPost';
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
        let postList = response.data;
        if(response.data){
        setPosts(postList.reverse());
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Posts</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div class="grid gap-8 lg:grid-cols-2">
      {isLoading && (
        <BlogCardSkeleton/>
      )}
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
      </div>
    </div>
    </div>
  );
};

export default Home;