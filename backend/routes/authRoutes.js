const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

// /api/auth/register
router.post("/register", register);

// /api/auth/login
router.post("/login", login);

// /api/auth/logout
router.post("/logout", logout);

module.exports = router;
