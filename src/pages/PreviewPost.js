import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/PreviewPost.css';

const PreviewPost = ({ post }) => {
  const handleShare = () => {
    const url = `${window.location.origin}/post/${post._id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Post URL copied to clipboard!');
    });
  };

  return (
    <div className="preview-post">
      <Link to={`/post/${post._id}`} className="preview-post-link">
        <div className="preview-post-image">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="preview-post-title">{post.title}</div>
      </Link>
      <button className="share-button" onClick={handleShare}>Share</button>
    </div>
  );
};

export default PreviewPost;
