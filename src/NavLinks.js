import React from 'react'

import {Link} from 'react-router-dom'
import './App.css';
import './index.css'

export default function NavLinks() {
    return (
        <div>
            <Link to='/title' className='nav-link'>Home</Link>

            <Link to='/Budget' className='nav-link'>Budget Management</Link>

            <Link to='/Contact'>Contact Us</Link>
        </div>
    )
}
