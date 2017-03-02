import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import groups from '../../data/users.json'

//[{"id":1,"first_name":"Andrew","last_name":"Greene","login":"agreene0","gender":"Male","avatar":"https://robohash.org/sitquiaearum.jpg?size=100x100&set=set1","description":"Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.","postal":"8300","movies":[{},{},{},{}]},

const myUser = 3

const GroupsView = () => (
  <Grid>
    <h1>Groups</h1>
    <Table striped>
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {
        groups.map(
          group => (
            <tr key={group.id}>
              <td>{group.id}</td>
              <td>{group.name}</td>
            </tr>
          )
        )
      }
      </tbody>
    </Table>
  </Grid>
)

export default GroupsView