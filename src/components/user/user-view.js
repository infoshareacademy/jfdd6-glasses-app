import React from 'react'
import MapFeature from './user-map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'



const UserView = (props) => {
  const userId = props.params.userId

  return (
    <div>
      <UserProfile id={userId}/>
      <UserFilmList id={userId}/>
      <MapFeature />
    </div>
  )
}
export default UserView