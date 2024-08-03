import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import { Auth } from './components/Auth';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import NotifyUsers from './components/NotifyUsers';
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
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} logout={logout}/>
        <main className="main-content dark:bg-gray-900 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/login" element={<Auth authType="Login" login={login}/>} />
            <Route path="/signup" element={<Auth authType="Signup" login={login}/>} />
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
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
