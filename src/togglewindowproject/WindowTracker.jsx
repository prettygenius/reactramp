import { useEffect,useState } from "react"

 function WindowTracker() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      console.log('...event mounted')
      function watchWidth() {
        console.log("event running...")
        setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", watchWidth)
    
    return function() {
        window.removeEventListener("resize", watchWidth)
    }
}, [])

//with component mounted can see it running when it's unmounted the clean function ensures no leaks
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}


export default WindowTracker
