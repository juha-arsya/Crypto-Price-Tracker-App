import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { FaCoins } from 'react-icons/fa'
import Coins from './components/Coins'
import Coin from './pages/Coin'
import Navbar from './components/Navbar'
import About from './pages/About'
import Welcome from './pages/Welcome'
import Trending from './pages/Trending'
import DetailTrending from './pages/DetailTrending'

import './App.css'

function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/coin' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />} >
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/trending' element={<Trending />} />
        <Route path='/trending_detail' element={<DetailTrending />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <footer>
        <NavLink to='/' className='iconWrapper'>
          <HiHome className='icon'/>
          Home
        </NavLink>
        <NavLink to='/trending' className='iconWrapper'>
          <FaCoins className='icon'/>
          Trending
        </NavLink>
        <NavLink to='/about' className='iconWrapper'>
          <MdGroup className='icon'/>
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App