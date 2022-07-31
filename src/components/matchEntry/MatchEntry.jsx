import React from 'react'

export default function MatchEntry(props) {
  return (
    
    <div>
      <p>Match Id: {props.match['metadata']['matchId']}</p>
    </div>
  )
}
