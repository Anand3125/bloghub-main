import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Blog not found');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this blog?')) {
      return;
    }

    try {
      setDeleting(true);
      await axios.delete(`/blogs/${id}`);
      navigate('/blogs');
    } catch (error) {
      console.error('Error deleting blog:', error);
      setError('Failed to delete blog');
    } finally {
      setDeleting(false);
    }
  };

  const isAuthor = blog && user && blog.author._id === user._id;

  if (loading) {
    return <div className="loading">Loading blog...</div>;
  }

  if (error || !blog) {
    return (
      <div className="error-container">
        <h2>Blog Not Found</h2>
        <p>{error}</p>
        <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <div className="blog-meta">
          <span>By {blog.author?.name || 'Anonymous'}</span>
          <span>Created: {new Date(blog.createdAt).toLocaleDateString()}</span>
          {blog.updatedAt !== blog.createdAt && (
            <span>Updated: {new Date(blog.updatedAt).toLocaleDateString()}</span>
          )}
        </div>
      </div>

      <div className="blog-content">
        <p>{blog.content}</p>
      </div>

      {isAuthor && (
        <div className="blog-actions">
          <Link to={`/edit-blog/${blog._id}`} className="btn btn-secondary">
            Edit Blog
          </Link>
          <button 
            onClick={handleDelete} 
            className="btn btn-danger"
            disabled={deleting}
          >
            {deleting ? 'Deleting...' : 'Delete Blog'}
          </button>
        </div>
      )}

      <div className="blog-footer">
        <Link to="/blogs" className="btn btn-outline">Back to Blogs</Link>
      </div>
    </div>
  );
};

export default BlogDetail; 