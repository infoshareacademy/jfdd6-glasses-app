import React from 'react'
import MapFeature from './user-map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'



const UserView = (props) => {

  const userId = props.params.userId
  console.log(userId)
  return (
    <div>
      <UserProfile userId={props.params.userId}/>


     {/* {
        props.groups.filter(
          grupa =>
          grupa.id === parseInt(props.params.groupId, 10) //te 10 to z definicji metody parseInt
        ).map(
          grupa => (
            <p key={grupa.id}>{grupa.name}</p>
          )
        )
      }*/}


      <UserFilmList id={userId}/>
      <MapFeature />
    </div>
  )
}
export default UserView