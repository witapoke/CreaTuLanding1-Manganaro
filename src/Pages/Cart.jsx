import { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsContext'
import '../Estilos/cartcontainer.css'

export default function Cart() {
  const { cart } = useContext(ProductsContext)
  return (
    <div className='cartContainer'>
      
    </div>
  )
}
