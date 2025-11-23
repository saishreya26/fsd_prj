// frontend/src/components/PostList.js
import React from 'react';
import '../styles/PostList.css';

const PostList = ({ posts, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="post-list">
      <h2>Knowledge Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">No posts yet. Create your first one!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-header">
              <h3>{post.title}</h3>
              <span className="category-badge">{post.category}</span>
            </div>
            
            <p className="post-content">{post.content}</p>
            
            <div className="post-footer">
              <div className="post-meta">
                <span className="author">By {post.author}</span>
                <span className="date">{formatDate(post.createdAt)}</span>
              </div>
              
              <div className="post-actions">
                <button className="btn-edit" onClick={() => onEdit(post)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(post._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;