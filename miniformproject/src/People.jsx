import { useState } from 'react';
import data  from './data/data'


 function People() {

  const [people, setPeople] = useState(data)

  function removeItem(id) {
  let updatedList = people.filter((person) => person.id !== id)
    setPeople(updatedList)
  
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
  </>
  )
};

export default People;