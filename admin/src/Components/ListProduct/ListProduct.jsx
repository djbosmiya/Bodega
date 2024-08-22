import React, { useEffect, useState } from 'react'
import './ListProduct.css';
import Table from 'react-bootstrap/Table';
import remove_icon from '../../assets/delete.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://bodega-backend-ugvx.onrender.com/all-products')
    .then((res)=> res.json())
    .then((data)=>{setAllProducts(data)})
  }

  useEffect(() => {
    fetchInfo();
  })

  const remove_product = async (id) =>{
    await fetch('https://bodega-backend-ugvx.onrender.com/delete-product',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    });
    await fetchInfo();
  }

  return (
    <section className="product-cart-section">
      <div className="product-cart-wrapper container">
      <Table responsive className='my-5'>
          <thead>
              <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Remove</th>
              </tr>
          </thead>
          <tbody className='cartitem-wrapper'>
            {allproducts.map((product,index)=>{
              return <tr key={index}>
                  <td><img src={product.image} alt="" className="cartitem-img" /></td>
                  <td className='cartitem-name'>{product.name}</td>
                  <td className='cartitem-price'>${product.price}</td>
                  <td className='cartitem-name'>{product.category}</td>
                  <td className='cartitem-remove-button'><img src={remove_icon} onClick={() => {remove_product(product.id)}} alt=""/></td>
              </tr>
            })}
          </tbody>
          </Table>
      </div>
    </section>
  )
}

export default ListProduct