
// Css
// import 'bootstrap/dist/css/bootstrap.min.css';
import AppStyle from '../src/css/App.css'


import MainPage from './jsx/main-page/MainPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShoppingCart from './jsx/shopping-cart-page/ShoppingCart';
import Header from './jsx/header/Header';
import UserPage from './jsx/user/UserPage';
import Alert from './jsx/alert/Alert';
import Favoriote from './jsx/favoriot-page/Favoriote';
import Products from './jsx/products-page/Products';
import ChangeAddress from './jsx/shopping-cart-page/components/delivery-address/components/ChangeAddress';


//  React Redux & Slices
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';

// Slices
import windowsSlice from './jsx/features/windows';
import userSlice from './jsx/features/user';
import filterSlice from './jsx/features/filters';
import shoppingCart from './jsx/features/shoppingCart';
import ProductDetail from './jsx/product-detail-page/ProductDetail';


const store = configureStore({
  reducer: {
    user: userSlice,
    windows: windowsSlice,
    filters: filterSlice,
    shoppingCart: shoppingCart
  }
})


function App() {

  return (
    <Provider store={store}>
      <div className="App" lang='fa'  >
        <BrowserRouter >
          {/* <Header /> */}

          
          {/* Pop Windows */}
          <UserPage />
          <ChangeAddress />
          <Alert />
          <ProductDetail />

          {/* Routes */}
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/favoriot' element={<Favoriote />} />
            <Route path='/products' element={<Products />} />
          </Routes>


        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
