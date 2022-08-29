import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setInput} from '../../slicers/searchInputSlicer'
import {setPlayerData} from '../../slicers/playerDataSlicer'

export default function ProfileSideBar() {

    const playerData = useSelector(state => state.playerData.value)
    let imgPath = "https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/"+ playerData.profileIconId +".png"

  return (
    
    <div>
        <h1>{playerData.name}</h1>
        <img src={imgPath}></img>
        <h3>Level: {playerData.summonerLevel}</h3>
    </div>
  )
}
