import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import POTD from "./components/potd"
import Description from "./components/Description";

function App() {

// const apiKey = '4y5DlmSpceTZEf9l3ZLJGrtX2pY8rSavr3isMJLQ'  

const [data, setData] = useState('')
const [photo, setPhoto] = useState('')


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    setPhoto(res.data.url)
    setData(res.data)
  }).catch(err => {
    console.error(err);
  })
}, [photo])

  return (
    <div className="App">
      <h1>NASA Photo of The Day</h1>
      <hr />
      <POTD photo={photo} data={data}/>
      <Description data={data}/>
    </div>
  );
}

export default App;
