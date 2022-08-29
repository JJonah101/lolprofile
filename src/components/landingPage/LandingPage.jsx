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
     <img src='https://lh3.googleusercontent.com/blogger_img_proxy/ANbyha2v2F7OWIFcELRraGW9aDGy2gBIHyEqnXlJEu2te-jv_q_ttEUFJOlaD-P3F12JUdr03xXIDfNt3HD9ZtvGX4q4Okf24xvxKnMWZkzwRGzqqt6xun1mZu0z7mrADsyB79JTT4uILOvLuaQ9mzSAL6Q8=w919-h516-p-k-no-nu'></img>
       <input id='test' onChange={() => dispatch(setInput(document.getElementById('test').value))}></input>
       <Link to="/profile">
        <button onClick={()=> searchForPlayerByName( )}>Test</button>
       </Link>
    </>
  )
}
