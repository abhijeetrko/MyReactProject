import React from 'react'

import {Link} from 'react-router-dom'
import './App.css';
import './index.css'

export default function NavLinks() {
    return (
        <div>
            <Link to='/title' className='nav-link'>Home     </Link>

            <Link to='/Budget' className='nav-link'>BudgetManagement     </Link>

            <Link to='/Contact'>ContactUs     </Link>

            <Link to='/Login'>Login     </Link>
            <Link to ='/Record'>RecordManagement     </Link>
            <Link to ='/Location'>Find Us on Google Maps</Link>
        </div>
    )
}
