import {useRef, useState} from 'react'
//vs useState does not trigger re-render
function Reference() {
  const [count, setCount] = useState(0)
  let buttonRef = useRef(null)

  function handleClick() {
    buttonRef.current.style.backgroundColor = 
    buttonRef.current.style.backgroundColor === 'red' ? 'green': 'red'
  }
  
  return (
      <div className='form'>
      <button type='button' ref={buttonRef} onClick={handleClick} style={{ padding: '10px', fontSize: '16px' }}>Toggle Color</button>
      <div>
      <button type='button' onClick={() => setCount(prevCount => prevCount + 1)} style={{ padding: '10px', fontSize: '16px' }}>+1</button>
      <div style={{ padding: '10px', fontSize: '20px' }}>{count}</div>
      </div>
      </div>
  )
}


export default Reference

























