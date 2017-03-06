import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import users from '../../data/users.json'


const myUser = 0

const UserFilmList = () => (
  <Grid>
    <h3>Lista filmów użytkownika: {users[myUser].login}</h3>


    <Table striped>
      <thead>
      <tr>
        <th>Jakie ma filmy</th>
      </tr>
      </thead>


      <tbody>
      {users[myUser].movies.map( function (movie, index) {return <tr key={index}><td>{movie}</td></tr>; } )}


      </tbody>
    </Table>




  <p style={{backgroundColor: 'yellow'}}>
    This is a FILM LIST
  </p>
    </Grid>
);

export default UserFilmList