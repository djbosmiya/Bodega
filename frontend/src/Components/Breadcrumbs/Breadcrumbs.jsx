import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../Assets/right-arrow.png';

const Breadcrumbs = (props) => {
    const {product} = props
  return (
    <div className="product-breadcrumbs-wrapper my-5">
        <div className="product-breadcrumbs">
          Home <img src={arrow_icon} alt='right-arrow'/> Product <img src={arrow_icon} alt='right-arrow'/> {product.category} <img src={arrow_icon} alt='right-arrow'/> {product.name} 
        </div>
    </div>
  )
}

export default Breadcrumbs