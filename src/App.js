import axios from 'axios'
import React, { useEffect, useState } from 'react';
//css
import './App.css';
//components
import UserData from './components/WeatherData'
import Header from './Components/Header';
import allInformation from './Components/InformationWrapper';
function App() {
  const [appState, setAppState] = useState([]);
  
  useEffect(()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid=0f254d6af51a3ed415121df968e75eb3`)
      .then(
        (rez) => {
          setAppState(rez.data);
        }
      ).catch(err => console.log(err));
  },[setAppState])
  console.log(appState)
  if (!appState) return null;
  return(
    <div className = "wrapper">
      <input type = "text"></input>
      <Header/>
      <allInformation appState/>
    </div>
  )
}

export default App;
