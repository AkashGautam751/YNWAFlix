import React,{ useState } from 'react';
import { Typography } from '@mui/material';
import './Home.css';
import liverBird from './../../assets/liverbird.png';
import thisIsAnfield from './../../assets/thisIsAnfield.png';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Typography variant="h4" component="div" sx={{ flexGrow: 1, bgcolor: 'red', color: 'white', p: 2, borderRadius: 1 }}>
        YNWA Flix - You'll Never Walk Alone
      </Typography> */}
      <div className="flex justify-center items-center">
        <a href="https://www.liverpoolfc.com/" target="_blank">
          <img src={liverBird} className="logo" alt="Liver Bird logo" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={thisIsAnfield}
          alt="This Is Anfield logo"
          className="image"
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
      <Typography variant="body1" className="card">
        This is Anfield Board Touches - {count}
      </Typography>
      <Typography variant="body2" className="read-the-docs">
        Click on the Liver Bird logo to learn more
      </Typography>
    </>
  );
}

export default Home