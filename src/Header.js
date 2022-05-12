import React from 'react';
import Logo from './airbnb-1.png'

function Header() {
    return(
        <div className='nav-bar'>
            <nav className='logo'>
            <img src={Logo} alt='airbnb-1' width='82.02px' height='25.35px'></img>
            </nav>
            
        </div>
    )
}

export default Header;