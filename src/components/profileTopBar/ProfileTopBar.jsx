import React from 'react'

export default function ProfileTopBar(props) {
  const imgKey = process.env.PUBLIC_URL + '/profileicon/' + props.profile.profileIconId + '.png';
  const summonerName = props.profile.name;
  const summonerLevel = props.profile.summonerLevel;
  console.log(imgKey);
  return (
    <>
     <p>{summonerName}</p>
          <img width="100" height="100"  src={imgKey}></img>
          <p>Summoner level: {summonerLevel}</p>
    </>
  )
}