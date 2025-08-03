import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/users/me');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="auth-required">
        <h2>Authentication Required</h2>
        <p>Please login to view your profile.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="profile">
      <div className="page-header">
        <h1>Your Profile</h1>
        <Link to="/create-blog" className="btn btn-primary">Create New Blog</Link>
      </div>

      {profile && (
        <div className="profile-content">
          <div className="profile-info">
            <h2>Profile Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>{profile.user.name}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{profile.user.email}</span>
              </div>
              <div className="info-item">
                <label>Member Since:</label>
                <span>{new Date(profile.user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="authored-posts">
            <h2>Your Blog Posts ({profile.authoredPosts.length})</h2>
            
            {profile.authoredPosts.length === 0 ? (
              <div className="empty-state">
                <p>You haven't created any blog posts yet.</p>
                <Link to="/create-blog" className="btn btn-primary">Create Your First Blog</Link>
              </div>
            ) : (
              <div className="blog-grid">
                {profile.authoredPosts.map((post) => (
                  <div key={post._id} className="blog-card">
                    <div className="blog-header">
                      <h3>{post.title}</h3>
                      <div className="blog-meta">
                        <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                        {post.updatedAt !== post.createdAt && (
                          <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="blog-content">
                      <p>{post.content.substring(0, 150)}...</p>
                    </div>
                    
                    <div className="blog-actions">
                      <Link to={`/blogs/${post._id}`} className="btn btn-outline">
                        View
                      </Link>
                      <Link to={`/edit-blog/${post._id}`} className="btn btn-secondary">
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile; 