const User = require("../models/User");
const Blog = require("../models/Blog");

// Get current user's profile with authored posts
const getCurrentUser = async (req, res) => {
  try {
    // Get user with authored posts
    const user = await User.findById(req.user._id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get all blogs authored by this user
    const authoredPosts = await Blog.find({ author: req.user._id })
      .select("title content createdAt updatedAt")
      .sort({ createdAt: -1 });

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      },
      authoredPosts
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCurrentUser }; 