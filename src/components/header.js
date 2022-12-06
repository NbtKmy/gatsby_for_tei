import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav　className='navbar'>
                <ul className='nav'>
                    <li className='nav-item'><Link to="../../public/index.html">top</Link></li>
                    <li className='nav-item'><Link to="../../public/sample/index.html">sample</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header