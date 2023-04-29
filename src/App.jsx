
// Css
import AppStyle from '../src/css/App.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




import MainPage from './jsx/main-page/MainPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



//  React Redux & Slices
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';

// Slices
import windowsSlice from './jsx/features/windows';
import userSlice from './jsx/features/user';
import filterSlice from './jsx/features/filters';
import shoppingCart from './jsx/features/shoppingCart';


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
      <div className="App" >
        <BrowserRouter >
          {/* Routes */}
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
