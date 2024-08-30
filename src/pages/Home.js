import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogCard, BlogCardSkeleton } from './PreviewPost';
import getBackendURL from '../config.js';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <motion.div
          className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Latest Airdrops
          </h1>
          <p className="font-light text-gray-600 sm:text-xl dark:text-gray-400">
            Stay updated with the most recent and exciting airdrops in the crypto world
          </p>
        </motion.div> 
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {isLoading ? (
            Array(4).fill().map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))
          ) : (
            posts.map(post => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;