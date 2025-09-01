/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import '../Estilos/navbar.css'
import BrandLogo from '../assets/brand-logo.jpg'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../Context/ProductsContext'
import UseDebounce from '../Hooks/UseDebounce'
import { CartContext } from '../Context/CartContext'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [input, setInput] = useState('')
  const { fetchBySearch } = useContext(ProductsContext)
  const { cartOn, setCartOn } = useContext(CartContext)

  const debouncedValue = UseDebounce(input, 500)

  useEffect(() => {
    fetchBySearch(debouncedValue)
  }, [debouncedValue])

  const openCategoriesMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    console.log('navbar')
  })

  return (
    <nav className='navbar'>
      <div className='categories-logo-container'>
        <Link to={'/'}>
          <img
            src={BrandLogo}
            alt=''
            height='70px'
            width='150px'
            className='brand-logo'
          />
        </Link>
        <div
          className='dropdown'
          onMouseLeave={() => closeMenu()}
          onMouseEnter={() => openCategoriesMenu()}
        >
          <div className='ham-menu'>
            <span className='ham-menu-span'></span>
            <span className='ham-menu-span'></span>
            <span className='ham-menu-span'></span>
          </div>
          <h3 className='category-select'>Categories</h3>

          {menuOpen && (
            <ul className='category-list'>
              <Link to='/' className='category-item'>
                <p>All</p>
              </Link>
              <Link to='/products/Furniture' className='category-item'>
                <p>Furniture</p>
              </Link>
              <Link to='/products/Fragrances' className='category-item'>
                <p>Fragrances</p>
              </Link>
              <Link to='/products/Groceries' className='category-item'>
                <p>Groceries</p>
              </Link>
            </ul>
          )}
        </div>
      </div>

      <div className='search-div'>
        <input
          type='text'
          className='search-input'
          placeholder='Search items...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className='session-div'>
        <i className='fa-solid fa-user fa-lg'></i>
        <Link className='loginBtn'>Ingresar</Link>
      </div>
      <div className='cart-on-cart-off'>
        {cartOn ? (
          <i
            className='fa-solid fa-cart-arrow-down hide-cart-btn'
            onClick={() => setCartOn(false)}
          ></i>
        ) : (
          <CartWidget />
        )}
      </div>
    </nav>
  )
}

export default NavBar
