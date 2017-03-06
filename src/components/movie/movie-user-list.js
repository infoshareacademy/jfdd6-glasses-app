import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

const UserList = ({id, userImport}) => {
  console.log(id);
  const b = id;
  console.log(b);
  const abc = userImport.filter( user => user.movies.includes(+b)  ? user.movies : "");

  console.log(abc);
  console.log(userImport);
  return (
    <tr>
      {
        userImport.filter(
          user => user.movies.includes(+id),
        ).map(
          user => (
            <LinkContainer to={'/user/' + user.id}>
            <td key={user.id}><img src={user.avatar} alt="" /></td>
            </LinkContainer>
          )
        )
      }

    </tr>
  );

}

export default connect (
  state => ({
    userImport: state.user.userData
  })
) (UserList)