import {useState,useEffect} from "react"

    function Fetchdata() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)
    

        useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>Character #{count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}


export default Fetchdata