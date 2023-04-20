import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Product from './Component/Product';
import ShowProduct from './Component/ShowProduct';
import Update from './Component/Update';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/showuser' element={<ShowProduct/>}></Route>
      <Route path='/user' element={<Product/>}></Route>
      <Route path='/edituser' element={<Update/>}></Route>
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

