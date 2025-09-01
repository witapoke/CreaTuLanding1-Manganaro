import Navbar from './Componentes/NavBar'
import './Estilos/App.css'
import ItemListContainer from './Componentes/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import FilteredProducts from './Pages/FilteredProducts'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import CartProvider from './Context/CartContext'
import { ProductsContext } from './Context/ProductsContext'

const App = () => {
  console.log('appContainer actualizada')

  return (
    <div className='appContainer'>
      <CartProvider>
        <Navbar />
        {/* <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/:category' element={<FilteredProducts />} />
          <Route path='/product/:detail' element={<ProductDetail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes> */}
      </CartProvider>
    </div>
  )
}

export default App
