import { useState } from "react";
import liverBird from "./assets/liverbird.png";
import thisIsAnfield from "./assets/thisIsAnfield.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-600 text-white p-4 text-xl rounded">
        YNWA Flix - You'll Never Walk Alone
      </div>
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
      <div className="card">This is Anfield Board Touches - {count}</div>
      <p className="read-the-docs">
        Click on the Liver Bird logo to learn more
      </p>
    </>
  );
}

export default App;
