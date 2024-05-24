import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CreatePost.css';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [links, setLinks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setIsLoading(true);
    try {
      const response = await axios.post('https://blog-backend-pfwc.onrender.com/api/posts',
        { title, content, image, links: links.split(',') },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      navigate('/');
      setIsLoading(false);
    }
  };

  async function returnToDashboard() {
    window.location.href = '/admin'
  }

  return (
    <div className="create-post">
      <div className="form-item">
        <button onClick={returnToDashboard}>Return To DashBoard</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Links (comma separated)"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
          />
        </div>
        <button className="create-post-button" type="submit">Create Post</button>
      </form>
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
