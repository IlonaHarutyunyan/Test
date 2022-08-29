import axios from 'axios'
import React, { useEffect, useState } from 'react';
//css
import './App.css';
//components
import Header from './Components/Header';
import BoxOfAllInformation from './Components/InformationWrapper';



function App() {
  const [appState, setAppState] = useState([]);
  const [city, setCity] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  
  
  useEffect(()=> {
    // console.log("adfs")
    // console.log(city)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f254d6af51a3ed415121df968e75eb3`)
      .then(
        (rez) => {
          setAppState([rez.data]);
          setCity("erevan")
        }
      ).catch(err => console.log(err));
  },[buttonClicked])

  console.log(appState)
  if (!appState) return null;
  return(
    <div className = "wrapper">
      <div>
        <Header/>
          <input type = "text" 
          className='inputStyle'
          onChange = {(event) => setCity(event.target.value)}
          placeholder ='Enter city '></input>
          <button onClick={() => setButtonClicked(!buttonClicked)} className = 'buttonStyle'>
            Get!
          </button>
      </div>
      
      <BoxOfAllInformation information = {appState}/>

    </div>
  )
}

export default App;
