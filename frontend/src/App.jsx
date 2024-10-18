import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

import axios from 'axios';
import Hero from './pages/hero/Hero';
import Map from './pages/map/Map';
import Test from './pages/test/Test';
import Blog from './pages/blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const url = 'http://localhost:3002';
  const [data, setData] = useState('');
  const darkMode = useDarkMode(false);

  useEffect(() => {
    connectServer();
  }, []);

  const connectServer = async () => {
    await axios
      .get(url + '/api')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <NextUIProvider>
      <main
        className={`${
          darkMode.value ? 'dark' : ''
        } text-foreground bg-background`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/map" element={<Test />} />
            <Route path="/test" element={<Map />} />
            <Route path = "/blog" element = {<Blog />} />
          </Routes>
        </Router>
      </main>
    </NextUIProvider>
  );
}

export default App;
