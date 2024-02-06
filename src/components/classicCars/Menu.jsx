import React from 'react'

const Menu = ({ onClickMenu, isMenuOpen }) => {

    const isMenuClass = isMenuOpen ? 'change' : '';
    return (
        <>
            {/* Menu */}
            <div className={`menu target ${isMenuClass}`} onClick={onClickMenu}>
                <div className='menu-line menu-line-1'></div>
                <div className='menu-line menu-line-2'></div>
            </div>

            {/* Navbar */}
            <nav className={`navbar target ${isMenuClass}`}>
                <a href="#home" className='navbar-link'>Home</a>
                <a href="#popular-cars" className='navbar-link'>Popular Cars</a>
                <a href="#" className='navbar-link'>Video Gallery</a>
                <a href="#" className='navbar-link'>Image Gallery</a>
                <a href="#" className='navbar-link'>Contact</a>
            </nav>

        </>
    )
}

export default Menu