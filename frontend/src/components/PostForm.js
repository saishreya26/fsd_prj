// frontend/src/components/PostForm.js
import React, { useState, useEffect } from 'react';
import '../styles/PostForm.css';

const PostForm = ({ onSubmit, editingPost, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: 'General'
  });

  useEffect(() => {
    if (editingPost) {
      setFormData(editingPost);
    }
  }, [editingPost]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', content: '', author: '', category: 'General' });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="content"
        placeholder="Share your knowledge..."
        value={formData.content}
        onChange={handleChange}
        required
        rows="6"
      />
      
      <input
        type="text"
        name="author"
        placeholder="Your Name"
        value={formData.author}
        onChange={handleChange}
        required
      />
      
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="General">General</option>
        <option value="Technology">Technology</option>
        <option value="Science">Science</option>
        <option value="Business">Business</option>
        <option value="Health">Health</option>
      </select>
      
      <div className="form-buttons">
        <button type="submit" className="btn-submit">
          {editingPost ? 'Update' : 'Create'}
        </button>
        {editingPost && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default PostForm;