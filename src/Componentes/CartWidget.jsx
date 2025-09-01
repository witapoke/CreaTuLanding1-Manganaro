import { useContext } from 'react'
import '../Estilos/cart.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
export default function CartWidget() {
  const { cartOn, setCartOn } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <div className='cart-description'>
        <p>Cart</p>
        <h4>$1500</h4>
      </div>

      <div className='cart-icon'>
        <i
          className='fa-solid fa-cart-shopping'
          onClick={() => setCartOn(!cartOn)}
        ></i>
      </div>
    </div>
  )
}
