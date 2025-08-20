import React from 'react'
import Navbar from './Componentes/NavBar'
import './Estilos/App.css'
import ItemListContainer from './Componentes/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import FilteredProducts from './Pages/FilteredProducts'
import ProductDetail from './Pages/ProductDetail'
export default function App() {
  return (
    <div className='appContainer'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/products/:category' element={<FilteredProducts />} />
        <Route path='/product/:detail' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  )
}
