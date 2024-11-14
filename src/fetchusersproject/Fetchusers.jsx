import  { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';


   function Fetchusers(){

    const [users, setUsers] = useState([])

    async function getUsers() {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    }

    useEffect(() => {
     getUsers()
    },[])

  return (
    <>
    <h3>Github Users</h3>
    <ul className='users'>
    {users.map((user) => {
      return (
      <li key={user.id}>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h4>{user.login}</h4>
        <a href={user.html_url}>profile</a>
      </div>
      </li>
      )
    })}
    </ul>
    </>
  )
};

export default Fetchusers;

  /**
    useEffect takes a function as its parameter. If that function
    returns something or it involves an ongoing process(web sockets, timers, event listeners, network requests), 
    it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically returns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    */