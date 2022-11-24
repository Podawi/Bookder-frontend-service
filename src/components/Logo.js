import React from "react"
import { useHistory } from "react-router-dom"
import logoNavbar from '../assets/logoNavbar.jpg'

const Logo =()=> {
    const history=useHistory()

    return (
        <div >
               <img src={logoNavbar}  alt="logoNavbar" onClick={()=>history.push("/")}/>
        </div>)
}

export default Logo