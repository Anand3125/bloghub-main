# BlogHub - A Simple Blogging Platform

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blogging application that allows users to register, login, create blog posts, view blogs, and manage their own posts.

## 🚀 Features

### User Authentication
- ✅ User registration with email and password
- ✅ User login with JWT token authentication
- ✅ Secure logout functionality
- ✅ Protected routes for authenticated users

### Blog Management
- ✅ Create new blog posts (authenticated users only)
- ✅ View all blog posts (public)
- ✅ View individual blog posts with full content
- ✅ Edit blog posts (author only)
- ✅ Delete blog posts (author only)
- ✅ Blog posts include title, content, author, and timestamps

### User Profile
- ✅ View user profile with personal information
- ✅ Display list of authored blog posts
- ✅ Profile management with authentication

### Security & Best Practices
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes and middleware
- ✅ Input validation and error handling
- ✅ Responsive design for mobile and desktop

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework with functional components and hooks
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 API Endpoints

### Authentication APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |
| POST | `/api/auth/logout` | Logout and remove token |

### Blog APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Fetch all blogs |
| GET | `/api/blogs/:id` | Fetch blog by ID |
| POST | `/api/blogs` | Create a new blog post (auth required) |
| PUT | `/api/blogs/:id` | Update blog post (author only) |
| DELETE | `/api/blogs/:id` | Delete blog post (author only) |

### User APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/me` | Get current user's profile (auth required) |

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ASSIGNMENT
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Create environment variables**
   Create a `.env` file in the backend directory:
   ```env

   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bloghub
   JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
   NODE_ENV=development
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the frontend development server**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`

## 📱 Usage

### Getting Started
1. Open your browser and navigate to `http://localhost:3000`
2. Register a new account or login with existing credentials
3. Start creating and managing your blog posts!

### Features Walkthrough
- **Home Page**: View featured blog posts and get started
- **Register/Login**: Create an account or sign in
- **Blogs**: Browse all published blog posts
- **Create Blog**: Write and publish new blog posts
- **Profile**: View your profile and manage your posts
- **Edit/Delete**: Manage your own blog posts

## 🔧 Project Structure

```
ASSIGNMENT/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Blog.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   ├── CreateBlog.jsx
│   │   │   ├── EditBlog.jsx
│   │   │   └── Profile.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
└── README.md
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Passwords are hashed using bcrypt
- **Protected Routes**: API endpoints protected with middleware
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Comprehensive error handling and user feedback

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean and intuitive interface
- **Loading States**: Visual feedback during API calls
- **Error Messages**: Clear error handling and user feedback
- **Form Validation**: Client-side and server-side validation

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection (local or cloud)
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author
## 📌 Other Projects

👉 **E-commerce React Website (Frontend):**
🔗 [ecommerce-react-website-beta.vercel.app](https://ecommerce-react-website-beta.vercel.app/)

👉 **E-commerce API (Node.js/Express):**
🔗 [evara-main-backend.onrender.com/api/products](https://evara-main-backend.onrender.com/api/products)



## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss.

---

## 👨‍💻 About Me

Hi, I'm **Anand Kumar**, a full-stack developer passionate about modern web and AI integration.

* 📧 Email: [georgian3125anand@gmail.com](mailto:georgian3125anand@gmail.com)
* 📞 Phone: +91 9430417562
* 🌐 Portfolio: [https://anand3125.github.io/Akfolio/](https://anand3125.github.io/Akfolio/)
* 🔗 LinkedIn: [linkedin.com/in/georgian3125anand](https://www.linkedin.com/in/georgian3125anand/)
* 🐦 Twitter: [x.com/Anand_3125](https://x.com/Anand_3125)
* 📅 Last Updated: **📅 August 2nd, 2025**

* 📄 Resume: [https://shorturl.at/6tjZ9](https://shorturl.at/6tjZ9)

---






Created as a MERN Stack Developer assignment for BlogHub - A Simple Blogging Platform.


---

**Note**: This project is designed to be simple, clean, and functional. Focus is on working code rather than over-engineering, as specified in the requirements. 
