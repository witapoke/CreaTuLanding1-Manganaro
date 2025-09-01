import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Estilos/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './Context/ProductsContext.jsx'
import CartProvider from './Context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>
)
