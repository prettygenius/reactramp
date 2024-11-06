import { useState } from 'react';
import data  from './data/data'

//array state
//  function People() {

//   const [people, setPeople] = useState(data)

//   function removeItem(id) {
//   let updatedList = people.filter((person) => person.id !== id)
//     setPeople(updatedList)
  
// }
//   return (
//   <>
//   {people.map((person) => {
//     const {name, id} = person
//     return( 
//     <div key={id} className='item'>
//       <h4>{name}</h4>
//       <button onClick={()=> removeItem(id)}>remove</button>
//     </div>
//     )
//   })}
//    <button className='btn'>Clear</button>
//   </>
//   )
// };

// export default People;




//object state
//  function People() {

//   const [people, setPeople] = useState({
//     name: 'Bob',
//     age: 30, 
//     message: 'random message'
//   })

//   const {name,age,message} = people
//   return (
//   <>
//   <h3>{name}</h3>
//   <h3>{age}</h3>
//   <h3>{message}</h3>
//   <button onClick={()=> setPeople({...people, message: 'hello world'})} className='btn'>Change Message</button>
//   </>
//   )
// };

// export default People;

//refactored with previous state
 function People() {

  const [people, setPeople] = useState(data)

  function removeItem(id) {

    setPeople((prevPeople) =>{
      let updatedList = prevPeople.filter((person) => person.id !== id)
      return updatedList
    }) 
    }
  

  return (
  <>
  {people.map((person) => {
    const {name, id} = person
    return( 
    <div key={id} className='item'>
      <h4>{name}</h4>
      <button onClick={()=> removeItem(id)}>remove</button>
    </div>
    )
  })}
   <button className='btn'>Clear</button>
  </>
  )
};

export default People;