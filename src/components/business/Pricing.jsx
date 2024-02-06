import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow } from 'swiper/modules';

const Pricing = () => {
    return (
        <section className='section-2'>

            <h1 className="section-heading">Pricing</h1>
            <div className="section-heading-line"></div>




            <Swiper
                effect={'coverflow'}
                rewind={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={10}
                coverflowEffect={{
                    rotate: 200,
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >

                <div className="pricing-card-wrapper">

                    <SwiperSlide>
                        <div className="pricing-card">
                            <div className="pricing-card-front ">

                                <h1 className="pricing-card-heading heading-free">FREE</h1>
                                <h3 className="pricing-card-price">$0</h3>


                                <ul className="pricing-card-list list-free">
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-times"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-times"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-times"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                </ul>

                                <button className="pricing-card-btn btn-free">Choose Plan</button>

                            </div>

                            <div className="pricing-card-back back-free">
                                <a href="#">Order Now</a>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="pricing-card">
                            <div className="pricing-card-front">

                                <h1 className="pricing-card-heading heading-basic">BASIC</h1>
                                <h3 className="pricing-card-price">$10</h3>


                                <ul className="pricing-card-list list-basic">
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-times"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                </ul>

                                <button className="pricing-card-btn btn-basic ">Choose Plan</button>

                            </div>

                            <div className="pricing-card-back back-basic">
                                <a href="#">Order Now</a>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="pricing-card">
                            <div className="pricing-card-front">

                                <h1 className="pricing-card-heading heading-standard">STANDARD</h1>
                                <h3 className="pricing-card-price">$12</h3>


                                <ul className="pricing-card-list list-standard">
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                </ul>

                                <button className="pricing-card-btn btn-standard">Choose Plan</button>

                            </div>

                            <div className="pricing-card-back back-standard">
                                <a href="#">Order Now</a>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="pricing-card">
                            <div className="pricing-card-front">

                                <h1 className="pricing-card-heading heading-premium">PREMIUM</h1>
                                <h3 className="pricing-card-price">$16</h3>


                                <ul className="pricing-card-list list-premium">
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Pricing Card</span>
                                    </li>
                                </ul>

                                <button className="pricing-card-btn btn-premium">Choose Plan</button>

                            </div>

                            <div className="pricing-card-back back-premium">
                                <a href="#">Order Now</a>
                            </div>

                        </div>
                    </SwiperSlide>
                
                </div>



            </Swiper>
        </section >
    );
}

export default Pricing