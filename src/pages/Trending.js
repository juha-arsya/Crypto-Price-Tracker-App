import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import './Trending.css';

export default function Trending() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/search/trending'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data.coins)
      console.log(response.data.coins)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="contentTrending">
      <div>{coins?.map(c => (
        <div className='TrendingCoinCard'>
            <p>{c.item.name}</p>
            <p>{c.item.symbol}</p>
          <Link className="buttonTrendingCoinCard" to={'/trending_detail/'}>Detail</Link>
        </div>
        ))}</div>
    </div>
  )
}
