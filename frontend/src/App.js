import './App.css';
import MyNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import LoginSignUp from './Pages/LoginSignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import veges_banner from './Components/Assets/vege_banner.jpg';
import fruit_banner from './Components/Assets/fruits_banner.jpg';
import dairy_banner from './Components/Assets/dairy_banner.jpg';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vegetables' element={<ShopCategory banner={veges_banner} category="Vegetable"/>} />
        <Route path='/fruits' element={<ShopCategory banner={fruit_banner} category="Fruits"/>} />
        <Route path='/dairy' element={<ShopCategory banner={dairy_banner} category="Dairy"/>} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignUp/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
