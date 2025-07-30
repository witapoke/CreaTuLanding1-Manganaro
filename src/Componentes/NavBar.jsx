/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import CartWidget from './CartWidget'
import '../Estilos/navbar.css'
import BrandLogo from '../assets/brand-logo.jpg'

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
      <h1 className='brand-title'>Nacho´s Shop</h1>
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
            <p className='category-item'>All</p>
            <p className='category-item'>Furniture</p>
            <p className='category-item'>Fragrances</p>
            <p className='category-item'>Groceries</p>
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
