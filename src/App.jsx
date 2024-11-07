import { useState } from 'react';
import data from './reminderproject/data';
import List from './reminderproject/List'


function App() {
  const [person, setPerson] = useState(data)
  return (
    <main>
    <section className='container'>
      <h3> {person.length} Birthday&apos;s Today</h3>
      <List data={person}/>
      <button onClick={()=> setPerson([])}>Clear</button>
    </section>
    </main>
  )
}

export default App
