import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {setInput} from '../../slicers/searchInputSlicer'
import {setPlayerData} from '../../slicers/playerDataSlicer'
import {BrowserRouter as Router, Link} from 'react-router-dom';


export default function LandingPage() {

    const input = useSelector(state => state.searchInput.value)
    const dispatch = useDispatch()
  
    function searchForPlayerByName() {
        // Set up API Call
        var ApiCallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + input + "?api_key=" + window.apiKey;
        axios.get(ApiCallString).then(function(response){
          dispatch(setPlayerData(response.data))
        })
    }

  return (
    <>
     <h5>League of Legends Player Searcher Landing Page</h5>
       <input id='test' onChange={() => dispatch(setInput(document.getElementById('test').value))}></input>
       <Link to="/profile">
        <button onClick={()=> searchForPlayerByName( )}>Test</button>
       </Link>
    </>
  )
}
