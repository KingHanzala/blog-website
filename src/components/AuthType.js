import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import getBackendURL from '../config.js';
import { LabelledInput } from './LabelledInput.js';

const backendURL = getBackendURL();



const AuthType = ({ authType, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isLogin = authType === 'Login';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminKeyChange = (e) => {
    setAdminKey(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let response = null;
      if (!isLogin) {
        response = await axios.post(`${backendURL}/api/signup`, {
          email,
          password,
          adminKey,
        });
      } else if (isLogin) {
        response = await axios.post(`${backendURL}/api/login`, {
          email,
          password,
        });
      }
      login(response.data.token);
      navigate('/admin');
    } catch (error) {
      console.error('Error signing up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="text-3xl font-extrabold mb-6 text-black dark:text-white">
          {isLogin ? 'Login' : 'Signup'}
        </div>
        {isLogin ? (
          <div className="text-slate-400 mb-4 text-black dark:text-white">
            Want to become an admin?
            <Link to="/signup" className="pl-2 underline">
              Signup
            </Link>
          </div>
        ) : (
          <div className="text-slate-400 mb-4 text-black dark:text-white">
            Already an admin?
            <Link to="/login" className="pl-2 underline">
              Login
            </Link>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <LabelledInput
            type="email"
            label="Email Address"
            placeholder="elonmusk@x.com"
            value={email}
            onChange={handleEmailChange}
          />
          <LabelledInput
            type="password"
            label="Password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isLogin && (
            <LabelledInput
              type="password"
              label="Secret Key"
              placeholder="secret key"
              value={adminKey}
              onChange={handleAdminKeyChange}
            />
          )}
          {!isLoading && (
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isLogin ? 'Login' : 'Signup'}
              </span>
            </button>
          )}
          {isLoading && (
            <button
              disabled
              type="button"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthType;
