import { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

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
    <div className="flex flex-col justify-center items-center h-screen ">
      <p className="  text-black text-center text-2xl">
        Senserator 2.0 web app
      </p>
      <p className="text-black text-center text-2xl">{data}</p>
    </div>
  );
}

export default App;
