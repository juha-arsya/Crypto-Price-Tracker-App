import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './DetailTrending.css';

export default function DetailTrending() {
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
    <div>{coins?.map(c => (
      <div className='container'>
        <div className='TrendingCard'>
          <img src={c.item.large} alt='coin'></img>
          <p>{c.item.name}</p>
          <p>{c.item.market_cap_rank}</p>
          <p>{c.item.price_btc}</p>
        </div>
      </div>
    ))}</div>
  )
}
