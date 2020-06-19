import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  let [changecolor, setChangecolor] = useState(true);
  
  return (
        <div className={ changecolor ? "box" : "Blue"}>
          <h1>Hello world</h1>
            <h1>COunter value ={counter}</h1>
            <button onClick={() => setCounter(++counter)}>add</button>
             <button onClick={() => setChangecolor(!changecolor) } >change color</button>
        </div>
  );

}


export default App;
