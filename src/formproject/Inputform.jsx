// import { useState } from "react"

// function Inputform() {

//   const [firstName, setfirstName] = useState('')
//   const [email, setEmail] = useState('')
//   const [person, setPerson] = useState([])
 
//   function handleSubmit(e) {
//     e.preventDefault() 
//     if(firstName && email) {
//       const people = {
//         firstName,email}
//         setPerson((prevPerson) => [...prevPerson,people])
//         setfirstName(""); // Clear input fields
//         setEmail("");
//     } else(
//       console.log('error empty value')
//     )
//   }
  
//   return (
//     <article>
//     <form className="form" onSubmit={handleSubmit}>
//     <div className="form-control"> 
//     <label htmlFor="firstName">Name: </label>
//     <input type="text" id="firstName" name="firstName" value={firstName}
//     onChange={(e) => setfirstName(e.target.value)}/>
//     </div>
//     <div className="form-control">
//     <label htmlFor="email">Email: </label>
//     <input type="text" id="email" name="email" value={email} 
//     onChange={(e) => setEmail(e.target.value)} />
//     </div>
//     <button type="submit">Add User</button>
//     </form>
//     <ul>
//       {person.map((people) => {
//         return(
//         <li key={people}>{`${people.firstName} - ${people.email}`}</li>
//       )
//       })}
//     </ul>
//     </article>
//   )
// }

// export default Inputform


//Refactor

import { useState, useId } from "react"

function Inputform() {

  const [formData, setFormData] = useState({
    firstName: "" ,
    email: "",
  })
 
 //using name to determine which property to update
  // function handleChange(e) {
  //   setFormData(prevData => {
      //return new object
      // return {
      //   ...prevData,
        //use square brackets to evaluate expression
  //       [e.target.name] : e.target.value
  //     }
  //   })
  // }

  const [submittedData, setSubmittedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const id = useId()

  function handleChange(e) {
    setFormData(prevData => {
      //destructure values from event object
      const {name ,value} = e.target
      return {
        ...prevData,
        [name] : value
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault();
    if (formData.firstName && formData.email) {
      // Add(combine) the current form data to the new array
      setSubmittedData((prevData) => [...prevData, formData]);
      // Clear the input fields
      setFormData({ firstName: "", email: "" });
      setErrorMessage('')
    } else {
      setErrorMessage('Please fill out all fields')
      console.log("Please fill out all fields");
    }
  }
  
 
  
  return (
    <article>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form-control"> 
    <label htmlFor={`${id}-firstName`}>Name: </label>
    <input type="text" id={`${id}-firstName`} name="firstName" value={formData.firstName}
    onChange={handleChange}/>
    </div>
    <div className="form-control">
    <label htmlFor={`${id}-email` }>Email: </label>
    <input type="text" id={`${id}-email` } name="email" value={formData.email} 
    onChange={handleChange} />
    </div>
    <button type="submit">Add User</button>
    </form>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    <ul>
     {submittedData.map((person,index) => {
       return(
         <li key={index} className="item">{`${person.firstName} - ${person.email}`}</li>
      )
      })}
   </ul>
    </article>
  )
}

export default Inputform