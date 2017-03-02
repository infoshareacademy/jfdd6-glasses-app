import React from 'react'
import {Grid} from 'react-bootstrap'
import usersArray from '../../data/users.json'

const UserProfile = () => {
  return (
    <Grid>

      {usersArray.map(
        singleUser => (<p>{singleUser.first_name}</p>)
      )}


      <p style={{backgroundColor: 'pink'}}>
        This is USER PROFILE
      </p>
    </Grid> )
}


export default UserProfile