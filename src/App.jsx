import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Products from './pages/products/Products'

function App() {
  return (
    <>
    <div>
      <p>Bom dia, senhor!</p>
      <p>Seja bem vindo a uma humilde página que brinca com React e Axios</p>
    </div>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Lista de produtos</Link></li>
        <li><Link to={"/sobre"}>Sobre</Link></li>
      </ul>
    </nav>
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
