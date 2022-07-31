import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {setMatchHistory} from '../../slicers/matchHistorySlicer'
import MatchEntry from '../matchEntry/MatchEntry';


export default function ProfileMatchHistory() {

  const dispatch = useDispatch()
  const playerData = useSelector(state => state.playerData.value)
  const matchHistoryData = useSelector(state => state.matchHistory.value)

  useEffect(() => {
    searchForPlayerMatchHistory();
  }, [playerData])

  function searchForPlayerMatchHistory() {
      // Set up API Call
      var ApiCallStringMatchHistory = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + playerData.puuid + "/ids?start=0&count=1&" + "&api_key=" + window.apiKey;
      var ApiCallStringSingleMatch = "https://europe.api.riotgames.com/lol/match/v5/matches/";

      var matchHistoryData = new Array();

      axios.get(ApiCallStringMatchHistory).then(function(response){
        response.data.forEach(match => {
          ApiCallStringSingleMatch += match + "?api_key=" + window.apiKey;
          axios.get(ApiCallStringSingleMatch).then(function(response){ 
            matchHistoryData.push(response.data)
            dispatch(setMatchHistory(matchHistoryData))
          });
        });
      })
  }



  return (
    <div className="container">
    {JSON.stringify(matchHistoryData) != '{}' ?
      matchHistoryData.map((item,key) =>
        <MatchEntry key={key} match={item} ></MatchEntry>
      )
      :
      <p>Keine Match Daten verfügbar</p>
      }
   </div>
  )
}
