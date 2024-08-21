import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@nextui-org/react';

import axios from 'axios';
import Hero from './pages/hero/Hero';
import NavBar from './pages/navbar/Navbar';

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
    <>
      {/* <NavBar /> */}
      <Hero />
    </>
    // <div className="flex flex-col justify-center items-center h-screen ">
    //   <p className="  text-black text-center text-2xl">
    //     Senserator 2.0 web app
    //   </p>
    //   <p className="text-black text-center text-2xl">{data}</p>
    //   <Button color="primary">Button</Button>
    // </div>
  );
}

export default App;
