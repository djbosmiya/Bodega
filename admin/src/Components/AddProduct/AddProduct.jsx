import React, { useState } from 'react';
import './AddProduct.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import upload_area from '../../assets/upload_area.png';

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    // image: "",
    category:"Vegetable",
    price:""
  })

  const imageHandler = (e) => {
    // setImage(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setProductDetails({...productDetails, image: file});
  }

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const addProduct = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    // console.log(productDetails);
    let responseData;
    let product = productDetails;
    
    let formData = new FormData();
    formData.append('product', product.image);
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('price', product.price);
    
    await fetch("https://99.79.127.229/uploads",{
      method:'POST',
      headers:{
        Accept: 'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('https://99.79.127.229/add-product',{
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data) => {
        data.success?alert("Product Added"):alert("Failed");
      })
    }
  }

  return (
    <div className="add-product-section">
      <Form method='post' className='add-product-wrap' encType="multipart/form-data" onSubmit={addProduct}>
        <Form.Group controlId="formBasicAddProduct">
          <Form.Label>Add Product</Form.Label>
          <Form.Control type="text" placeholder="Add Product" name="name" value={productDetails.name} onChange={changeHandler}/>
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" name="price" value={productDetails.price} onChange={changeHandler} />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Label>Select Category</Form.Label>
          <Form.Select aria-label="Product Category" name="category" value={productDetails.category} onChange={changeHandler}>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label><img src={image?image:upload_area} className="upload-thumbnail"/></Form.Label>
          <Form.Control name='file' type="file" onChange={imageHandler} />
        </Form.Group>
    
        <Button type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct