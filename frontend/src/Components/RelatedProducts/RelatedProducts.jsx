import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
// import related_products from '../Assets/related_products';
import Item from '../Item/Item';

const RelatedProducts = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() =>{
    fetch(`${BASE_URL}/featureproduct`)
    .then((resp)=>resp.json())//passing response to json method
    .then((data)=>setRelatedProduct(data));//sending the parse data to the setFeatureProduct function
  },[])//Square bracket to use useEffect only once

  return (
    <div class="product-feature-wrap">
        <div class="home-feature-wrap container">
            <h2>Related Products</h2>
            <div class="home-feature-inner-wrap row">
                {relatedProduct.map((related_products,i) => (
                    <Item key={i} id={related_products.id} name={related_products.name} image={related_products.image} category={related_products.category} price={related_products.price}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts