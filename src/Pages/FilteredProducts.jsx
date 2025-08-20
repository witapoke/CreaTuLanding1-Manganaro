/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Estilos/ItemListContainer.css'

export default function FilteredProducts() {
  const [filteredProducts, setFilteredProducts] = useState([])
  let params = useParams()

  useEffect(() => {
    fetchProducts()
  }, [params.category])

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          fetch(`https://dummyjson.com/products/category/${params.category}`)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              setFilteredProducts(res.products)
            })
        )
      }, 1500)
    })
  }

  return (
    <ul className='itemListContainer'>
      {filteredProducts.map((product) => (
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
