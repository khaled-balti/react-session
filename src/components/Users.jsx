import React, { useEffect, useState } from 'react'
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])
  const fetchUsers = async() => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const users = await response.json()
      // console.log(users)
      setUsers(users.users)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
    {users.map(user => {
        return <User firstName={user.firstName} lastName={user.lastName} />
      })}
    </div>
  )
}

export default Users