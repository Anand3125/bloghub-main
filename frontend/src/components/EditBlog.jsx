import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [blog, setBlog] = useState(null);
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/${id}`);
        const blogData = response.data;
        
        // Check if user is the author
        if (blogData.author._id !== user?._id) {
          setError('You are not authorized to edit this blog');
          return;
        }
        
        setBlog(blogData);
        setFormData({
          title: blogData.title,
          content: blogData.content
        });
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Blog not found or you are not authorized to edit it');
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchBlog();
    } else {
      navigate('/login');
    }
  }, [id, user, isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Please fill in all fields');
      setSaving(false);
      return;
    }

    try {
      await axios.put(`/blogs/${id}`, formData);
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
      setError(error.response?.data?.message || 'Failed to update blog');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading blog...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/blogs')} className="btn btn-primary">
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="edit-blog">
      <div className="page-header">
        <h1>Edit Blog Post</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your blog title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Blog Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="form-textarea"
            placeholder="Write your blog content here..."
            rows="10"
          />
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate(`/blogs/${id}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog; 