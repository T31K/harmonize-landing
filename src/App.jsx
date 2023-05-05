import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { EmojiProvider, Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Premium from './pages/Premium';
import Downloads from './pages/Downloads';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <EmojiProvider data={emojiData}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/premium"
            element={<Premium />}
          />
          <Route
            path="/download"
            element={<Downloads />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />
        </Routes>
      </EmojiProvider>
    </>
  );
}

export default App;
