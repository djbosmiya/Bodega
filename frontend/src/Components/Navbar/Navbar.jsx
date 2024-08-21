import React from 'react';
import './Navbar.css';
import 'react-bootstrap';
import {Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../Assets/lemon.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useState } from 'react';

//changes done to navbar.jsx for the checking develop branch
const MyNavbar = () => {

    // const [menu, setMenu] = useState("home");
    const location = useLocation();
    const { pathname } = location;  
    const splitLocation = pathname.split("/");

    const {getTotalCartCount} = useContext(ShopContext);

    const [expanded, setExpanded] = useState(false);

  return (
    <header className="header">
        <Navbar expanded={expanded} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo}  width={100} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav as="ul">
                        <Nav.Item as="li" className={splitLocation[1] === "" ? "active" : ""}>
                            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={splitLocation[1] === "vegetables" ? "active" : ""}>
                            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/vegetables">Vegetables</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={splitLocation[1] === "fruits" ? "active" : ""}>
                            <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/fruits'>Fruits</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={splitLocation[1] === "dairy" ? "active" : ""}>
                            <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/dairy'>Dairy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div className='navbar-cart-wrap d-flex'>
                    {localStorage.getItem('auth-token')
                    ?<button className='cart-button' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                    :<Link onClick={() => setExpanded(false)} to='/login'><button className='cart-button'>Login</button></Link>
                    }
                    <div className="cart-img-wrap d-flex">
                        <Link onClick={() => setExpanded(false)} to='/cart'><img className='cart-img' src={cart} alt='cart'/></Link>
                        <div className="cart-count">{getTotalCartCount()}</div>
                    </div>
                    
                </div>
            </Container>
            
        </Navbar>
    </header>
  )
}

export default MyNavbar