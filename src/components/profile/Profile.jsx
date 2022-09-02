import React from 'react'
import ProfileMatchHistory from '../profileMatchHistory/ProfileMatchHistory'
import ProfileSideBar from '../profileSideBar/ProfileSideBar'
import ProfileTopBar from '../profileTopBar/ProfileTopBar'

export default function Profile() {


  return (
    <div className='profileDiv'>
      <ProfileTopBar></ProfileTopBar>
      <ProfileSideBar></ProfileSideBar>
      <ProfileMatchHistory></ProfileMatchHistory>
     </div>
  )
}
