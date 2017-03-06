import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import { connect} from 'react-redux'
import users from '../../data/users.json'
import titles from '../../data/movies.json'

const myUser = 2

const filteredUser = users.find(user => user.id === myUser)

const UserFilmList = () => (
  <Grid>
    <h3>Lista filmów użytkownika: {filteredUser.login}</h3>


    <Table striped>
      <thead>
      <tr>
        <th>Jakie ma filmy</th>
      </tr>
      </thead>


      <tbody>
      {
        titles.filter(
          title => filteredUser.movies.indexOf(title.id) !== -1
        ).map(
          userTitle => <tr key={userTitle.id}><td>{userTitle.name}</td></tr>
        )
      }
      </tbody>
    </Table>
    </Grid>
);

//export default UserFilmList
export default connect(
  state => ({
    user: state.user.userData //wyciągam ze stanu aplikacji listę grup
  })
)(UserFilmList)