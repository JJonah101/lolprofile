import React, { useEffect } from 'react'
import axios from 'axios';
import './profileTopBar.css';
import { useSelector, useDispatch } from 'react-redux'
import {setInput} from '../../slicers/searchInputSlicer'
import {setPlayerData} from '../../slicers/playerDataSlicer'


export default function ProfileTopBar() {

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
    <div className='wrapperProfileTopBar'>
      <div>
        <button className='headerButton'>test</button>
        <button className='headerButton'>test2</button>
      </div>
      <input id='test' onChange={() => dispatch(setInput(document.getElementById('test').value))}></input>
      <button onClick={()=> searchForPlayerByName( )}>Test</button>
    </div>
      
    </>
  )
}