import { useState, useEffect } from "react"

const url = 'https://api.github.com/users/prettygeniuss'

function Loadcontent() {

const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [user, setUser] = useState('default user')

useEffect(() => {
  fetch(url).then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      setLoading(false)
      setError(true)
      throw new Error(response.statusText)
    }
  }).then((user) => {
    setUser(user.login) //or destructure const {login} = user
    setLoading(false)
    //after retrieving data
  }).catch((error) => {
    console.log(error)})
},[])

  if(loading) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if(error) {
    return(
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <h1>{user}</h1>
  ) 
  
}

export default Loadcontent