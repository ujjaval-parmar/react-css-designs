import React from 'react'

const PopularCars = ({onClickMenu, isMenuOpen}) => {
    const isMenuClass = isMenuOpen ? 'change' : '';
  return (
    <div 
    className='wrapper' 
    onClick={isMenuOpen ? onClickMenu : ()=>{}}
    id='popular-cars'
    >
        <section className={`section-2 target ${isMenuClass} `}>
            <h1 className='section-heading'>Popular Cars</h1>
            <div className="cards-wrapper center">

                <div className="card">
                    <h2 className="car-name">
                        Car Name
                    </h2>
                    <img src="/images/car-1.jpg" alt="car" />
                    <h3 className="car-price">$ 200,000</h3>
                    <button className="card-btn">See More</button>
                </div>

                <div className="card">
                    <h2 className="car-name">
                        Car Name
                    </h2>
                    <img src="/images/car-2.jpg" alt="car" />
                    <h3 className="car-price">$ 10,000</h3>
                    <button className="card-btn">See More</button>
                </div>

                <div className="card">
                    <h2 className="car-name">
                        Car Name
                    </h2>
                    <img src="/images/car-3.jpg" alt="car" />
                    <h3 className="car-price">$ 300,000</h3>
                    <button className="card-btn">See More</button>
                </div>



            </div>
        </section>
    </div>
  )
}

export default PopularCars