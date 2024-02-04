import { useState } from "react"
import "./App.css"
function Appbar() {
const [intro, showIntro] = useState(false)

    return (
        <div className="nav">
            {intro ? <intro/> : <Appbar/>}
            <div>
                <h5>Link<span>Hub</span></h5>
            </div>
            <div className="btns">
                <button onClick={(e) => {
                    window.location = "/intro"
                }}
                >Intro</button>
                <button onClick={(e) => {
                    window.location = "/links"
                }}>Customize Links</button>
            </div>
        </div>
    )
}
export default Appbar;