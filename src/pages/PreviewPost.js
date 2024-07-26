import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/PreviewPost.css';
import shareicon from '../share-icon.png';

const PreviewPost = ({ post }) => {
  const handleShare = () => {
    const url = `${window.location.origin}/post/${post.id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Post URL copied to clipboard!');
    });
  };

  return (
    <div className="preview-post">
      <Link to={`/post/${post.id}`} className="preview-post-link">
        <div className="preview-post-image">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="preview-post-title">{post.title}</div>
      </Link>
      <button className="share-button" onClick={handleShare}>
        <img src={shareicon} alt="Share" style={{ background: "transparent" }} />
      </button>
    </div>
  );
};

export default PreviewPost;
