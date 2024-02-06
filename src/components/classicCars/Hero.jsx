import React from 'react'

const Hero = ({ onClickMenu, isMenuOpen }) => {
    const isMenuClass = isMenuOpen ? 'change' : '';
    return (
        <div
            className='wrapper'
            onClick={isMenuOpen ? onClickMenu : () => { }}
            id='home'
        >
            <section className={`section-1 target ${isMenuClass} center`}>
                <h1 className='section-heading section-1-heading'>Classic Cars</h1>
                <img src="/images/car-section1.png" alt="Hero" className='section-1-img' />
            </section>
        </div>
    )
}

export default Hero