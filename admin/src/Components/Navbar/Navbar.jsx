// import React from 'react'
import './Navbar.css';
import 'react-bootstrap';
import {Navbar, Container} from 'react-bootstrap';
import admin_logo from '../../assets/lemon.png';
import profile_logo from '../../assets/profile_icon.png';
import { Link } from 'react-router-dom';


//Hie making changes to the master branch
const AdminNavbar = () => {
  return (
    <header className="admin-header">
        <Navbar expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">
                <img src={admin_logo}  width={100} alt='logo'/>
              </Navbar.Brand>
              <div className='navbar-cart-wrap d-flex'>
                <div className="cart-img-wrap d-flex">
                  <Link to='/'>
                    <img className='cart-img' src={profile_logo} alt='cart'/>
                  </Link>
                </div>
              </div>
            </Container>
        </Navbar>
    </header>
  )
}

export default AdminNavbar