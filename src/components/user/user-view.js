import React from 'react'
import MapFeature from './user-map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'


const UserView = (props) => (
<div>
    <UserProfile userId={props.params.userId} />
    <UserFilmList />
    <MapFeature />
</div>
)

export default UserView