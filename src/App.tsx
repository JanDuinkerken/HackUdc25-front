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

export default function App() {
  return (
    <MantineProvider>
      {
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path="/" element={<Chatbot />} />
              <Route path="diary" element={<Diary />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      }
    </MantineProvider>
  );
}

