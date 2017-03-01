import React from 'react'
import { Table } from 'react-bootstrap'

const Users = ({users, title}) => {
  const userNodes = users ? users.map(
      user => (
        <tr key={user.id}>
        <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.surname}</td>
        </tr>
      )
    ) : []

  return (
    <div>
      <h1>{title}</h1>
      <Table striped bordered>
        <tbody>
        {
          users === undefined ?
            <tr><td>Sorry, we are missing props here</td></tr> :
            users.length === 0 ?
             <tr><td>No users for me</td></tr> : userNodes
        }
        </tbody>
      </Table>
    </div>
  )
}

export default Users