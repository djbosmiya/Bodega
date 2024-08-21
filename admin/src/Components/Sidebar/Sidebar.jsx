import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
        <ul id="menu">
            <li><a href="/add-product">Add Product</a></li>
            <li><a href="/product-list">Product List</a></li>
        </ul>
    </div>
  )
}

export default Sidebar