import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const UserList = ({id, userImport}) => {
  console.log(id);
  const b = id;
  console.log(b);
  const abc = userImport.userData.filter(user => user.movies.includes(+b) ? user.movies : "");

  console.log(abc);
  console.log(userImport);
  return (
    <tr>
      {
        userImport.userData.filter(
          user => user.movies.includes(+id),
        ).map(
          user => (
            <td key={user.id}>
              <Link to={'/user/' + user.id}>
                <img src={user.avatar} alt=""/>
              </Link>
            </td>
          )
        )
      }

    </tr>
  );

}

export default connect(
  state => ({
    userImport: state.user
  })
)(UserList)