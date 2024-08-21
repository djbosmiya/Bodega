import React, { useContext } from 'react';
import './ProductDisplay.css';
import before_star from '../Assets/star.png';
import after_star from '../Assets/after_star.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="product-detail-display">
            <div className="product-detail-display-wrapper row">
                <div className="product-detail-left col-md-6">
                    <div className="product-left-wrapper">
                        <img className="product-img" src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="product-detail-right col-md-6">
                    <div className="product-right-wrapper">
                        <h1 className="product-title-name">{product.name}</h1>
                        <div className="product-review-wrap">
                            <img src={after_star} alt='review-star'/>
                            <img src={after_star} alt='review-star'/>
                            <img src={after_star} alt='review-star'/>
                            <img src={after_star} alt='review-star'/>
                            <img src={before_star} alt='review-star'/>
                        </div>
                        <div className="product-desc-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
                            <p> Et netus et malesuada fames ac. Blandit cursus risus at ultrices mi. Mauris in aliquam sem fringilla ut morbi. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                        <div className="product-price-wrap">
                            <p>Price: ${ product.price }</p>
                        </div>
                        <div className="product-button-wrap">
                            <button onClick={() => {addToCart(product.id)}} className="offer-button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay