/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import '../Estilos/ItemListContainer.css'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../Context/ProductsContext'
import { ListItem } from './ListItem'
import { CartComponent } from './CartComponent'
import { CartContext } from '../Context/CartContext'

const ItemListContainer = () => {
  const { getFromLocalStorage, cart, cartOn } = useContext(CartContext)
  const { products, fetchProducts } = useContext(ProductsContext)

  useEffect(() => {
    fetchProducts()
    getFromLocalStorage()
  }, [])

  useEffect(() => {
    console.log('item list container render')
  })

  return (
    <div>
      <ul className='itemListContainer'>
        {products.map((product) => (
          <ListItem product={product} key={product.id} productsAdd={products} />
        ))}
      </ul>
      <div>
        {cartOn && (
          <div className='carrito-costado' style={{ textAlign: 'center' }}>
            {cart.map((item) => (
              <CartComponent item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemListContainer
