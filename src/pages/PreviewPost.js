import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/PreviewPost.css';


export const BlogCard = ({post}) => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-5 text-gray-500">
            <span class="">
            </span>
            <span class="text-sm">{post.createdAt.slice(0,10)}</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{post.title}</a></h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{post.description.slice(0,100) + "..."}</p>
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
                
            </div>
            <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
              <Link to={`/post/${post.id}`}>Read More</Link>
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </article>                  
</section>
  )
}

// Skeleton Loading State
export const BlogCardSkeleton = () => {
  return (
    <div>
    <section className="pt-4 pb-4 bg-white dark:bg-gray-900">
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-gray-300 text-gray-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Post
          </span>
          <span className="bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
        <h2 className="mb-2 h-8 bg-gray-300 rounded-md"></h2>
        <p className="mb-5 h-4 bg-gray-300 rounded-md"></p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            <span className="font-medium dark:text-white bg-gray-300 h-4 w-16 rounded-md"></span>
          </div>
          <span className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
      </article>
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-gray-300 text-gray-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Post
          </span>
          <span className="bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
        <h2 className="mb-2 h-8 bg-gray-300 rounded-md"></h2>
        <p className="mb-5 h-4 bg-gray-300 rounded-md"></p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            <span className="font-medium dark:text-white bg-gray-300 h-4 w-16 rounded-md"></span>
          </div>
          <span className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
      </article>
      </section>
      <section className="pt-4 pb-4 bg-white dark:bg-gray-900">
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-gray-300 text-gray-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Post
          </span>
          <span className="bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
        <h2 className="mb-2 h-8 bg-gray-300 rounded-md"></h2>
        <p className="mb-5 h-4 bg-gray-300 rounded-md"></p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            <span className="font-medium dark:text-white bg-gray-300 h-4 w-16 rounded-md"></span>
          </div>
          <span className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 bg-gray-300 h-4 w-24 rounded-md"></span>
        </div>
      </article>
    </section>
    </div>
    
  );
};

// Error State
export const BlogCardError = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <article className="p-6 bg-red-100 rounded-lg border border-red-200 shadow-md dark:bg-red-800 dark:border-red-700">
        <div className="flex justify-between items-center mb-5 text-red-500">
          <span className="text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M8 1.5a.5.5 0 0 1 .5.5v6.5h4a.5.5 0 0 1 0 1H8.5v4a.5.5 0 0 1-1 0v-4H3a.5.5 0 0 1 0-1h4.5V2a.5.5 0 0 1 .5-.5z"
                clipRule="evenodd"
              />
            </svg>
            Error
          </span>
          <span className="text-sm">Failed to load post</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          We couldn't load the blog post. Please try again later.
        </p>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Try Again
          </a>
        </div>
      </article>
    </section>
  );
};

