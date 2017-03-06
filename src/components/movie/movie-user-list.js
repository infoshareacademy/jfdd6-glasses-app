import React from 'react'
import {connect} from 'react-redux'

const UserList = ({id, userImport}) => (
  <tr>
    {
      userImport.map(
        user => (
          <td key={user.id}><img src={user.avatar} alt="" /></td>
        )
      )
    }

  </tr>
)

export default connect (
  state => ({
    userImport: state.user.userData
  })
) (UserList)
