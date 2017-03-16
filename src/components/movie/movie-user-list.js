import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserList extends React.Component {

  render() {
    const {user, id} = this.props;

    return (
      <tr>
        {
          user.data ? user.data.filter(
            user => user.movies.includes(+id),
          ).map(
            user => (
              <td key={user.id}>
                <Link to={'/user/' + user.id}>
                  <img src={user.avatar}
                       alt={user.first_name + ' avatar'}
                       title={user.first_name}
                       className="avatar-img"/>
                </Link>
              </td>
            )
          ) :
            <td> brak danych</td>
        }
      </tr>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  })
)(UserList)

