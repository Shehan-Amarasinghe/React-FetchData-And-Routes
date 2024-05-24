import React, { useEffect, useState } from 'react'

function Contact() {

  const [users, setUsers] = useState([]);

  const gettingData = async () => {
    try {
      const r = await fetch("https://jsonplaceholder.typicode.com/users")
      const rs = await r.json();
      setUsers(rs);

    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    gettingData();
  },[])

  return (
    <div>
    <h1>Contact</h1>
    {users.map((user) => {
      return (
        <ul key={Math.random()}>
          <h3>{user.id}</h3>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.address.street}</li> 
          <li>{user.address.suite}</li>
          <li>{user.address.city}</li>
          <li>{user.address.zipcode}</li>
          <li>{user.address.geo.lat}</li>
          <li>{user.address.geo.lng}</li>
        </ul>
      )})}
    </div>
  )
}

export default Contact