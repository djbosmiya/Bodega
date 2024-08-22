import React, {createContext, useEffect, useState} from "react";
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

//create the default empty cart and set to zero.
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://bodega-backend-ugvx.onrender.com/all-products')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://bodega-backend-ugvx.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://bodega-backend-ugvx.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://bodega-backend-ugvx.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                // let itemInfo = all_product.find((product) => product.id === Number(item));
                totalCount += cartItems[item];
            }
        }
        return totalCount;
    }

    const contextValue = { getTotalCartCount, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;