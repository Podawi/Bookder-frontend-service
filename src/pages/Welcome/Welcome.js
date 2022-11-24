import React from "react"
import {useHistory} from "react-router-dom"
import logoWelcome from '../../assets/logoWelcome.jpg'
import {paths} from "../../data/constants.js"

const Welcome =()=> {
const history = useHistory()
    return (<div className="App-welcome">
        <button  >
            <img src={logoWelcome} className="App-logo" alt="logoWelcome" onClick={()=>history.replace(paths.home) }/>
        </button>
    </div>)
}

export default Welcome