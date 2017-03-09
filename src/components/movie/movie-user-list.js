import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {fetchUsers} from '../../state/user'


class UserList extends React.Component {
  // componentWillMount() {
  //   this.props.fetchUsers()
  // }

  render() {

    const { id } = this.props;

    return (
      <tr>
        {
          this.props.users ? this.props.users.filter(
            user => user.movies.includes(+id),
          ).map(
            user => (
              <td key={user.id}>
                <Link to={'/user/' + user.id}>
                  <img src={user.avatar} alt=""/>
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
    users: state.users
  }),
  dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
  })
) (UserList)

