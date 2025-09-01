/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Estilos/ItemListContainer.css'
import { ProductsContext } from '../Context/ProductsContext'

export default function FilteredProducts() {
  const { products, fetchByCategory } = useContext(ProductsContext)
  let params = useParams()

  useEffect(() => {
    console.log('filtered products render')
  })

  useEffect(() => {
    fetchByCategory(params.category)
  }, [params.category])

  return (
    <ul className='itemListContainer'>
      {products.map((product) => (
        <Link
          className='linksito'
          to={`/product/${product.title}`}
          key={product.id}
        >
          <li className='listItem'>
            <img src={product.thumbnail} className='productImage' />
            <h3 className='productTitle'>{product.title}</h3>
            <div className='productDetails'>
              <p>${product.price}</p>
              <button className='addToCartBtn'>➕</button>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
