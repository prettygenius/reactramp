import { useState } from "react"

function Inputform() {

  const [firstName, setfirstName] = useState('')
  const [email, setEmail] = useState('')
  const [person, setPerson] = useState([])
 
  function handleSubmit(e) {
    e.preventDefault() 
    if(firstName && email) {
      const people = {
        firstName,email}
        setPerson((prevPerson) => [...prevPerson,people])
        setfirstName(""); // Clear input fields
        setEmail("");
    } else(
      console.log('error empty value')
    )
  }
  
  return (
    <article>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form-control"> 
    <label htmlFor="firstName">Name: </label>
    <input type="text" id="firstName" name="firstName" value={firstName}
    onChange={(e) => setfirstName(e.target.value)}/>
    </div>
    <div className="form-control">
    <label htmlFor="email">Email: </label>
    <input type="text" id="email" name="email" value={email} 
    onChange={(e) => setEmail(e.target.value)} />
    </div>
    <button type="submit">Add User</button>
    </form>
    <ul>
      {person.map((people) => {
        return(
        <li key={people}>{`${people.firstName} - ${people.email}`}</li>
      )
      })}
    </ul>
    </article>
  )
}

export default Inputform