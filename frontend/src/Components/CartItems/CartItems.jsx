import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Table from 'react-bootstrap/Table';
import remove_icon from '../Assets/delete.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

    const isCartEmpty = Object.keys(cartItems).length === 0 || Object.values(cartItems).every(qty => qty === 0);
    // console.log("isCartEmpty;" +isCartEmpty);
    // console.log(Object.keys(cartItems).length);
    // console.log(Object.values(cartItems));

    return (
        <section className="product-cart-section">
            <div className="product-cart-wrapper container">
            <Table responsive className='my-5'>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className='cartitem-wrapper'>
                    {isCartEmpty ?  
                        <tr><td>Cart is Empty. Start Shopping!!!!</td></tr>
                    : 
                    all_product.map((e) => { 
                        if(cartItems[e.id] > 0){
                            return  (<tr key={e.id}>
                                        <td><img src={e.image} alt="" className="cartitem-img" /></td>
                                        <td className='cartitem-name'>{e.name}</td>
                                        <td className='cartitem-price'>${e.price}</td>
                                        <td className='cartitem-qty'><button>{cartItems[e.id]}</button></td>
                                        <td className='cartitem-subtotal-price'>${e.price * cartItems[e.id]}</td>
                                        <td className='cartitem-remove-button'><img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt=""/></td>
                                    </tr>
                            );
                        }
                        return null;
                    })
                    }
                </tbody>
                </Table>
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                    </div>

                    <div className="cartitems-total-promo-wrap row">
                        <div className="cartitems-total-promo col-md-6">
                            <div className="cartitems-total-item d-flex">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr/>
                            <div className="cartitems-total-item d-flex">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <div className="cartitems-total-item d-flex">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartitem-promocode col-md-6">
                            <p>If you have a promo code, Enter it here</p>
                            <div className="cartitems-promobox d-flex">
                                <input type='text' placeholder='promo code'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CartItems