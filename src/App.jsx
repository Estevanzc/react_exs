import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Products from './pages/products/Products'
import background from "./components/images/background.jpg";
import Products_view from './pages/products/components/Products_view'

function App() {
  return (
    <>
    <img src={background} className='fixed w-screen h-screen z-0' alt="" />
    <div className='w-screen h-screen flex justify-start items-center flex-col z-1'>
      <BrowserRouter>
      <nav className='z-2 fixed w-full h-16 flex justify-center items-center bg-[rgb(0,17,28,0.7)] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]'>
        <ul className='flex justify-center items-center gap-x-5 text-[#f0f0f0] font-semibold'>
          <li><Link className='px-5 py-1 transition-all hover:bg-[rgb(255,255,255,0.1)] rounded-md' to={"/"}>Home</Link></li>
          <li><Link className='px-5 py-1 transition-all hover:bg-[rgb(255,255,255,0.1)] rounded-md' to={"/products"}>Lista de produtos</Link></li>
          <li><Link className='px-5 py-1 transition-all hover:bg-[rgb(255,255,255,0.1)] rounded-md' to={"/sobre"}>Sobre</Link></li>
        </ul>
      </nav>
      <div className='w-full h-full z-1'>
        <Routes className='z-1'>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<Products_view />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
