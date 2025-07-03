import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [page, setPage] = useState('login'); // 'login' | 'signup' | 'dashboard'
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      setPage('dashboard');
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    setPage('dashboard');
  };

  const handleSignup = () => {
    setPage('login');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    setPage('login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {page === 'signup' && <Signup onSignup={handleSignup} />}
      {page === 'login' && <Login onLogin={handleLogin} />}
      {page === 'dashboard' && (
        <>
          <button
            onClick={handleLogout}
            className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          <Dashboard />
        </>
      )}

      {(page === 'login' || page === 'signup') && (
        <p className="mt-4 text-gray-700">
          {page === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setPage('signup')}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setPage('login')}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Log In
              </button>
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default App;
