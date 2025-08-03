import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="loading">Loading blogs...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="blog-list">
      <div className="page-header">
        <h1>All Blog Posts</h1>
        <Link to="/create-blog" className="btn btn-primary">Create New Blog</Link>
      </div>

      {blogs.length === 0 ? (
        <div className="empty-state">
          <h3>No blogs yet</h3>
          <p>Be the first to create a blog post!</p>
          <Link to="/create-blog" className="btn btn-primary">Create Your First Blog</Link>
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <div className="blog-header">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>By {blog.author?.name || 'Anonymous'}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="blog-content">
                <p>{blog.content.substring(0, 150)}...</p>
              </div>
              
              <div className="blog-actions">
                <Link to={`/blogs/${blog._id}`} className="btn btn-outline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList; 