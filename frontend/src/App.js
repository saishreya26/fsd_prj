// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { getAllPosts, createPost, updatePost, deletePost } from './services/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await getAllPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      alert('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      await createPost(postData);
      fetchPosts();
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  };

  const handleUpdatePost = async (postData) => {
    try {
      await updatePost(editingPost._id, postData);
      fetchPosts();
      setEditingPost(null);
      alert('Post updated successfully!');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        fetchPosts();
        alert('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post');
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>📚 Knowledge Sharing Platform</h1>
        <p>Share and discover knowledge with the community</p>
      </header>

      <main className="app-main">
        <PostForm
          onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
          editingPost={editingPost}
          onCancel={handleCancel}
        />

        {loading ? (
          <p className="loading">Loading posts...</p>
        ) : (
          <PostList
            posts={posts}
            onEdit={handleEdit}
            onDelete={handleDeletePost}
          />
        )}
      </main>
    </div>
  );
}

export default App;