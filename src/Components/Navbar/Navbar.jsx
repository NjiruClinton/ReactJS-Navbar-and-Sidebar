import React from 'react'
import './navbar.css'
import{Home, Settings, Info, AccountCircle, ExitToApp} from "@material-ui/icons"

export default function Navbar() {
    return (
        <div className="navbar">
            <li>
            <Home className="navbarIcon"/>Home</li>
            <li>
            <Info className="navbarIcon"/>About</li>
            <li>
            <Settings className="navbarIcon"/>Settings</li>
            <li>
            <AccountCircle className="navbarIcon"/>Account</li>
            <li>
            <ExitToApp className="navbarIcon"/>Logout</li>
            
        </div>
    )
}
