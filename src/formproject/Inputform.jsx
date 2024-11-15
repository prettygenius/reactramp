import { useState } from "react"

function Inputform() {

  const [firstName, setfirstName] = useState('')
  const [email, setEmail] = useState('')
  
  return (
    <article>
    <form className="form" onSubmit={(e) => e.preventDefault()}>
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
    </article>
  )
}

export default Inputform