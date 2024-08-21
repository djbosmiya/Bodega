import React from 'react'
import Slider from 'react-slick'
import './HomeSlider.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import breads from '../Assets/breads.jpg'
import fruits from '../Assets/fruits.jpg'
import pulses from '../Assets/pulses.jpg'

const HomeSlider = () => {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        lazyLoad: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    const grocerySlider = [
        {
          imageSrc: breads,
          title: 'Get 20% off',
          description: 'On Breads',
          buttonText: 'GET NOW',
          
        },
        {
            imageSrc: fruits,
            title: 'Get 25% off',
            description: 'On Fruits',
            buttonText: 'GET NOW',
            
        },
        {
            imageSrc: pulses,
            title: 'Get 30% off',
            description: 'On Pulses',
            buttonText: 'GET NOW',
            
        }        
    ]

    return (
        <section class="home-banner-slider">
            <div class="home-slider-wrap">  
                <Slider {...sliderSettings}>
                    {grocerySlider.map((card) => (
                        <div class="slick-item">
                            <img class="slick-item-img" src={card.imageSrc} alt={card.description} />
                            <div class="slick-item-detail my-auto ms-auto">
                                <div class="slick-item-detail-wrap mx-auto mt-5">
                                    <h3 class="offer-text">{card.title}</h3>
                                    <h4>{card.description}</h4>
                                    <button class="offer-button">{card.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider