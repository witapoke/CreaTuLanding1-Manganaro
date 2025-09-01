/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Estilos/ProductDetail.css'

const ProductDetail = () => {
  let params = useParams()

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    console.log('product detail  render')
  })

  const [product, setProduct] = useState([])

  const fetchProducts = () => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          fetch(`https://dummyjson.com/products/search?q=${params.detail}`)
            .then((res) => res.json())
            .then((res) => {
              console.log(res.products)
              setProduct(res.products)
            })
        )
      }, 1500)
    })
  }

  return (
    <div>
      {product.map((product) => (
        <div className='mainProductDetailContainer' key={product.id}>
          <li className='productDetailContainer' key={product.id}>
            <img src={product.thumbnail} className='productDetailImage' />
            <h3 className='productDetailTitle'>{product.title}</h3>
            <div className='ProductDetailDescrption'>
              <p className='product-price'>${product.price}</p>
              <p className='product-description'>{product.description}</p>
            </div>
          </li>
          <li className='productInfoContainer'>
            <p>AvailabilityStatus: {product.availabilityStatus}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Warranty Information: {product.warrantyInformation}</p>
          </li>
        </div>
      ))}
    </div>
  )
}

export default ProductDetail
