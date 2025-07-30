import '../Estilos/cart.css'

export default function CartWidget() {
  return (
    <div className='cart-container'>
      <div className='cart-icon'>🛒</div>
      <div className='cart-description'>
        <p>Cart</p>
        <h4>$1500</h4>
      </div>
    </div>
  )
}
