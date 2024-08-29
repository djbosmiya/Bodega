import React from 'react';
import './HomeAboutUs.css';
import about_us from '../Assets/about_us.jpg';

const HomeAboutUs = () => {
  return (
    <section class="home-about-section">
            <div class="home-about-wrap container">
                <h2>About Us</h2>
                <div class="home-about-inner-wrap row">
                    <div class="home-about-text col-md-6">
                        <div class="home-about-text-wrap">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, soluta magnam illum, tempore placeat eos adipisci voluptatem architecto vitae quo fugit ut itaque. Totam, hic animi. Repellendus distinctio dolore doloremque.</p>
                        </div>
                        <div class="home-about-read-more">
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="home-about-img col-md-6">
                        <div class="home-about-img-wrap text-center">
                            <img class="about-img img-fluid" src={about_us} alt="About Us"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HomeAboutUs