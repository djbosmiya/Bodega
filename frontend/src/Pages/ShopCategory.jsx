import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import sort_img from '../Components/Assets/dropdown.png';
import Item from '../Components/Item/Item.jsx';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <section className='product-list-section'>
      <div className="product-list-wrapper container my-5">
        <div className="product-banner-wrap d-flex justify-content-center">
          <img className="product-banner img-fluid" src={props.banner} alt='banner'/>
        </div>
        <div className="product-sort-wrap mt-5 row">
          <div className="product-sort-text col-md-6">
            <p><span>Showing 1-12 </span>out of 36 products</p>
          </div>
          <div className="product-sort-button-wrap col-md-6 d-flex justify-content-end">
            <div className="product-sort-button d-inline-flex">
              <p>Sort By</p>
              <img src={sort_img} alt="Sort icon" />
            </div>
          </div>
        </div>
        <div className="product-list-item">
          <div className="home-feature-inner-wrap row">
          {all_product && all_product.length > 0 ? (
              all_product.map((product_data, i) => {
                if (props.category === product_data.category) {
                  return (
                    <Item
                      key={i}
                      id={product_data.id}
                      name={product_data.name}
                      image={product_data.image}
                      category={product_data.category}
                      price={product_data.price}
                    />
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p>No products available in this category.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCategory;