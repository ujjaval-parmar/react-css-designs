import React from 'react'

const Menu = ({ isMenuOpen, onClick }) => {


    const menuClass = isMenuOpen ? 'change' : '';

  return (
    <>
    <nav className={`navbar ${menuClass}`}>
        <div className="logo">
            <a href="#">
                <span>C</span>ode<span>A</span>nd<span>C</span>reate
            </a>
        </div>

        <div className="nav-list">
            <a href="#" className='nav-link'>Home</a>
            <a href="#" className='nav-link'>About</a>
            <a href="#" className='nav-link'>Pricing</a>
            <a href="#" className='nav-link'>Blog</a>
        </div>


    </nav>

    <div className="menu" onClick={onClick}>
        <div className={`line line-1 ${menuClass}`}></div>
        <div className="line line-2"></div>
        <div className={`line line-3 ${menuClass}`}></div>
    </div>


    </>
  )
}

export default Menu