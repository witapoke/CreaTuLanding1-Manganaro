import React from 'react'
import Navbar from './Componentes/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
export default function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer message={"productos"}/>
    </div>
  )
}
