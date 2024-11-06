import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

import Hero from './pages/hero/Hero';
import Map from './pages/map/Map';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { NextUIProvider } from '@nextui-org/react';
import Container from './pages/Dashboard/Container';
import Overview from './components/Overview';
import Team2 from './pages/team/team2';
import URBANityLab from './pages/URBANity/urbanityLab';
import PSFI from './components/psfi';
import PSFICalculation from './components/psfi-calculation';
import VideoCompression from './components/videoCompression';

import Software from './components/software';
import HardwareNew from './components/hardware';

function App() {
  const url = 'https://senstest.onrender.com/';
  const darkMode = useDarkMode(false);

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
            <Route path="/doc" element={<Container />}>
              <Route path="" element={<Navigate to="/doc/map" />} />
              <Route path="map" element={<Map />} />
              <Route path="overview" element={<Overview />} />
              <Route path="team" element={<Team2 />} />
              <Route path="urbanity-lab" element={<URBANityLab />} />
              <Route path="psfi" element={<PSFI />} />
              <Route path="psf-calculation" element={<PSFICalculation />} />
              <Route path="video-compression" element={<VideoCompression />} />
              <Route path="software" element={<Software />} />
              <Route path="hardware" element={<HardwareNew />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </NextUIProvider>
  );
}

export default App;
