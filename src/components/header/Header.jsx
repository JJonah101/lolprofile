import React from 'react'

export default function Header() {
  return (
    <nav>
        <button>Home</button>
        <button>Profile</button>
        <button>Lobby Search</button>
        <input onChange={ e => setSearchInput(e.target.value)} type="text"></input>
    </nav>
  )
}
