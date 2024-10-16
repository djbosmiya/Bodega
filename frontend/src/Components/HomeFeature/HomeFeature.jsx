import React, { useEffect, useState } from 'react';
import './HomeFeature.css';
//import product_data from '../Assets/product_data.js';
import Item from '../Item/Item.jsx';

const HomeFeature = () => {
  const [featureProduct, setFeatureProduct] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() =>{
    fetch(`${BASE_URL}/featureproduct`)
    .then((resp)=>resp.json())//passing response to json method
    .then((data)=>setFeatureProduct(data));//sending the parse data to the setFeatureProduct function
  },[BASE_URL])//Square bracket to use useEffect only once
  return (
    <section className="home-feature-product">
        <div className="home-feature-wrap container">
            <h2>Featured Products</h2>
            <div className="home-feature-inner-wrap row">
                {featureProduct.map((product_data,i) => (
                    <Item key={i} id={product_data.id} name={product_data.name} image={product_data.image} category={product_data.category} price={product_data.price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HomeFeature