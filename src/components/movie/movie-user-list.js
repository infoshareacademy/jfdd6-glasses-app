import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserList extends React.Component {

  render() {
    const {user, id} = this.props;

    return (
      <div>
        {
          user.data ? user.data.filter(
              user => user.movies.includes(+id),
            ).map(
              (user, index) => (
                <div key={user.id} className={ (index % 2 !== 0 ? 'movie-list-bg-1' : 'movie-list-bg-2') + ' movie-user-link'}><br/>
                  <Link to={'/user/' + user.id} >
                    <img src={user.avatar}
                         alt={user.first_name + ' avatar'}
                         title={user.first_name}
                         className="avatar-img"/>
                    {user.first_name}<br/><br/>
                  </Link>
                </div>
              )
            ) :
            <div> brak danych</div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  })
)(UserList)