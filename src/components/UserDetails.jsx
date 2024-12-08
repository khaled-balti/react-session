import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    console.log(params.id)
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
  const user = users.find(user => user.id === parseInt(params.id))
  console.log("user", user)
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails