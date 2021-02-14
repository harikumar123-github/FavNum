import React, { useState } from 'react'
import './App.css';

function App() {

  const [userNum,setUserNum] = useState(0);
  const [fetchedData,setFetchedData] = useState('');

  const fetchD = () => {
    fetch(`http://numbersapi.com/${userNum}?json`).then( res => ( res.json() ) ).then( data => {
      setFetchedData(data.text);
    } )
  }

  return (
    <div className="App">
      <h1> Take a look at what your favourite number in different aspects mean.. </h1>
      <div className="userInt">
        <label htmlFor="num" > Number </label>
        <input id="num" type="number" onChange={ e => setUserNum(e.target.value) } />

        <button onClick={fetchD}>  <strong> LooK </strong>  </button>

      </div>
      <div><h2>{fetchedData}</h2></div>
    </div>
  );
}

export default App;
