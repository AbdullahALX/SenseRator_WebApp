import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

import axios from 'axios';
import Hero from './pages/hero/Hero';
import Map from './pages/map/Map';
import Blog from './pages/blog/Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import Doc from './pages/Dashboard/Container';
import Overview from './components/Overview';

function App() {
  const url = 'http://localhost:3002';
  const [data, setData] = useState('');
  const darkMode = useDarkMode(false);

  // useEffect(() => {
  //   connectServer();
  // }, []);

  // const connectServer = async () => {
  //   await axios
  //     .get(url + '/api')
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

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
            <Route path="/doc" element={<Doc />}>
              <Route path="" element={<Navigate to="/doc/map" />} />
              <Route path="map" element={<Map />} />
              <Route path="overview" element={<Overview />} />

              {/* <Route path="team" element={<Team />} />
              <Route path="urbanity-lab" element={<URBANityLab />} />
              <Route path="psfi" element={<PSFI />} />
              <Route path="psfi-calculation" element={<PSFICalculation />} />
              <Route path="video-compression" element={<VideoCompression />} /> */}
            </Route>
          </Routes>
        </Router>
      </main>
    </NextUIProvider>
  );
}

export default App;
