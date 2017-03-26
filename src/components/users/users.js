import React from 'react'
import {Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class AllUsers extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <Grid>
          {users.data ? users.data.map(
              (arg) => (
                <div key={arg.id} className="users-list-user col-xs-12 col-sm-6 col-lg-4 movies-no-padding">
                  <div className="movies-spaced-list">
                    <Link to={'/user/' + arg.id}>
                      <img src={arg.avatar} alt={arg.first_name} height="50px" width="50px"/>
                      {arg.first_name} {arg.last_name}</Link>
                  </div>
                </div>
              )
            ) :
              <p className="name">Brak danych</p>
          }

      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.user
  })
)(AllUsers)
