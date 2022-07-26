import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import ProfileTopBar from './components/profileTopBar/ProfileTopBar';

function App() {

  const [seachInput, setSearchInput] = useState("");

  const [playerData, setPlayerData] = useState({});

  const API_KEY = 'RGAPI-76766fab-211f-4f4d-bf43-ddf5572ab16a'

  function searchForPlayerByName(event) {
      // Set up API Call
      var ApiCallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + seachInput + "?api_key=" + API_KEY;
      axios.get(ApiCallString).then(function(response){
        setPlayerData(response.data);
      }).catch(function (error){
        setPlayerData({})
      })
  }

  function LandingPage() {
    return (
      <>
      <h1>League Player Search:</h1>
      <input onChange={ e => setSearchInput(e.target.value)} type="text"></input>
      <button onClick={e => searchForPlayerByName(e)} >Search Player</button>
      </>
    )
  }

  return (
     <div className="App">
     {JSON.stringify(playerData) != '{}' ?
    <>
      <div className='container'>
        <h5>League of Legends Player Searcher</h5>
        <input onChange={ e => setSearchInput(e.target.value)} type="text"></input>
        <button onClick={e => searchForPlayerByName(e)} >Search Player</button>
      </div>

         <ProfileTopBar profile={playerData} ></ProfileTopBar>
        </> 
        :
        <>
        <LandingPage></LandingPage>
        </>
       }
    </div>
  );
}

export default App;
