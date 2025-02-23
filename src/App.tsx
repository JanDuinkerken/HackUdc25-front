// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Login } from './pages/login/Login';
import { Chatbot } from './pages/chatbot/Chatbot';
import { Diary } from './pages/diary/Diary';
import { Profile } from './pages/profile/Profile';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { useState } from 'react';

// Function to get the access token from cookies
const getAccessToken = () => {
  return localStorage.getItem('access_token');
}

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return !!getAccessToken();
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  const changeAuth = () => {
    setAuthenticated(!authenticated);
  }

  return (
    <MantineProvider>
      {
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path="/" element={
                <ProtectedRoute authenticated={authenticated}>
                  <Chatbot />
                </ProtectedRoute>
              } />
              <Route path="diary" element={
                <ProtectedRoute authenticated={authenticated}>
                  <Diary />
                </ProtectedRoute>
              } />
              <Route path="profile" element={
                <ProtectedRoute authenticated={authenticated}>
                  <Profile />
                </ProtectedRoute>
              }>
              </Route>
            </Route>
            <Route path="login" element={<Login changeAuth={changeAuth} />} />
          </Routes>
        </BrowserRouter>
      }
    </MantineProvider>
  );
}

