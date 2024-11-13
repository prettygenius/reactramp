import {useState} from "react"
import WindowTracker from "./WindowTracker"

    function ToggleWindow() {
    
    const [show,setShow] = useState(true)
    
    return (
        <div className="container">
            <button onClick={()=> setShow(prevShow => !prevShow)}>
                Toggle WindowTracker
            </button>
            {show === true && <WindowTracker />}
        </div>
    )
}


export default ToggleWindow