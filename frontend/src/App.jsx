import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@nextui-org/react';

import axios from 'axios';
import Hero from './pages/hero/Hero';
import Map from './pages/map/Map';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test/Test';

function App() {
  const url = 'http://localhost:3002';
  const [data, setData] = useState('');

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
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
