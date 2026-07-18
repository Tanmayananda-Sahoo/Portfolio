import React from 'react'
import { Volume2 , Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
            <span className="nav-logo">EN</span>
        </div>
        <div className="nav-right">
            <span className="nav-btn"><Moon className="nav-icon" color={'#77777C'} size={20}/></span>
        </div>
    </div>
  )
}

export default Navbar
