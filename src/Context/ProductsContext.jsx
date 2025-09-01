/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
              setProducts(res.products)
            })
        )
      }, 200)
    })
  }

  const fetchBySearch = (search) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then((res) => res.json())
            .then((res) => {
              setProducts(res.products)
            })
        )
      }, 200)
    })
  }

  const fetchByCategory = (params) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(`https://dummyjson.com/products/category/${params}`)
            .then((res) => res.json())
            .then((res) => {
              setProducts(res.products)
            })
        )
      }, 1500)
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts,
        setProducts,
        products,
        fetchBySearch,
        fetchByCategory,
        filteredProducts,
        setFilteredProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
