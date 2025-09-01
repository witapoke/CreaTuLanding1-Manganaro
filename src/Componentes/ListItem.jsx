import { useContext, useEffect } from 'react'
import { ProductsContext } from '../Context/ProductsContext'
import { Link } from 'react-router-dom'
import '../Estilos/ItemListContainer.css'
import { CartContext } from '../Context/CartContext'

export const ListItem = ({ product, productsAdd }) => {
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    console.log('list item render')
  })

  return (
    <li className='listItem'>
      <Link className='linksito' to={`/product/${product.title}`}>
        <img src={product.thumbnail} className='productImage' />
      </Link>
      <h3 className='productTitle'>{product.title}</h3>
      <div className='productDetails'>
        <p>${product.price}</p>
        <button
          className='addToCartBtn'
          onClick={() => addToCart(productsAdd, product.id)}
        >
          ➕
        </button>
      </div>
    </li>
  )
}
