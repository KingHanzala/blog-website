import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import NotifyUsers from './components/NotifyUsers'
import PrivateRoute from './components/PrivateRoute';
import SubscribeForm from './components/SubscribeForm';
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/signup" element={<Signup login={login}/>} />
        <Route path="/subscribe" element={<SubscribeForm/>} />
        <Route
          path="/admin"
          element={<PrivateRoute element={AdminDashboard} />}
        />
        <Route
          path="/create-post"
          element={<PrivateRoute element={CreatePost} />}
        />
        <Route
          path="/notify-users"
          element={<PrivateRoute element={NotifyUsers} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
