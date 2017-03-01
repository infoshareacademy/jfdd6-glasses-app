import React from 'react'
import MapFeature from './map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'

const UserView = () => (
<div>
    <UserProfile />
    <UserFilmList />
    <MapFeature />
</div>
)

export default UserView