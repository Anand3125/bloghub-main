import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs');
        setBlogs(response.data.slice(0, 3)); // Show only 3 latest blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to BlogHub</h1>
        <p>Share your thoughts, ideas, and stories with the world</p>
        {!isAuthenticated && (
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        )}
      </div>

      <div className="featured-blogs">
        <h2>Latest Blog Posts</h2>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : blogs.length > 0 ? (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <div className="blog-meta">
                  <span>By {blog.author?.name || 'Anonymous'}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <Link to={`/blogs/${blog._id}`} className="btn btn-outline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No blogs yet. Be the first to create one!</p>
        )}
        
        <div className="view-all">
          <Link to="/blogs" className="btn btn-primary">View All Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 