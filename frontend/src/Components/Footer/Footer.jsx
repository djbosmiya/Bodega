import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/lemon.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import linkedin from '../Assets/linkedin.png'
import pinterest from '../Assets/pinterest-logo.png'
import twitter from '../Assets/twitter.png'


const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer-content container">
            <div class="footer-logo-wrap d-flex justify-content-center">
                <img class="footer-logo mt-5" src={footer_logo}  width={120} alt='Bodega logo'/> 
            </div>
            <div class="footer-links col-md-12 d-flex justify-content-center">
                <ul class="footer-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="footer-social-media d-flex justify-content-center col-md-12">
                <a class="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook" />
                </a>
                <a class="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a class="twitter" href="https://twitter.com/?lang=en-ca" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter" />
                </a>
                <a class="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a class="pinterest" href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                    <img src={pinterest} alt="pinterest"/>
                </a>
            </div>
            <div class="footer-copyright d-flex justify-content-center">
                <div class="copright mt-5">
                    <p>Copyright 2024 Dhara Bosmiya | All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer