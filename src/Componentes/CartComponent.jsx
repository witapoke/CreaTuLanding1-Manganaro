import { useContext, useEffect } from 'react'
import '../Estilos/ItemListContainer.css'
import { ProductsContext } from '../Context/ProductsContext'
import { CartContext } from '../Context/CartContext'
import { memo } from 'react'

export const CartComponent = ({ item }) => {
  const { addToCart, RemoveQty } = useContext(CartContext)
  const { products } = useContext(ProductsContext)

  useEffect(() => {
    console.log('cart component render')
  })

  return (
    <div className='carrito-costado-item' key={item.id}>
      <img src={item.thumbnail} className='ccii' />
      <h4 className='ccit'>{item.title}</h4>
      <p>${item.price}</p>
      <p>Qty:{item.qty}</p>
      <div className='remove-add-btns'>
        <i
          className='fa-solid fa-plus fa-lg ccbtn'
          onClick={() => addToCart(products, item.id)}
        ></i>
        <i
          className='fa-solid fa-minus fa-lg ccbtn'
          onClick={() => RemoveQty(item.id)}
        ></i>
      </div>
    </div>
  )
}
