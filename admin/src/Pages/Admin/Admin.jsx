import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className="admin-section">
      <div className="admin-section-wrap">
        <Sidebar/>
        <Routes>
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path='/product-list' element={<ListProduct/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin