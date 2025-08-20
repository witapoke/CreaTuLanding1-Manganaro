/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import CartWidget from './CartWidget'
import '../Estilos/navbar.css'
import BrandLogo from '../assets/brand-logo.jpg'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const selectRef = useRef()

  function openCategoriesMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>
      <img
        src={BrandLogo}
        alt=''
        height='70px'
        width='150px'
        className='brand-logo'
      />
      <Link to='/' className='linksito'>
        <h1 className='brand-title'>Nacho´s Shop</h1>
      </Link>
      <div className='dropdown'>
        <h3
          ref={selectRef}
          className='category-select'
          onClick={() => openCategoriesMenu()}
        >
          Categories
        </h3>
        {menuOpen ? (
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
        ) : (
          ''
        )}
      </div>
      <CartWidget />
      <div className='search-div'>
        <input
          type='text'
          className='search-input'
          placeholder='Search items...'
        />
        <button className='search-btn'>Search</button>
      </div>
    </nav>
  )
}
