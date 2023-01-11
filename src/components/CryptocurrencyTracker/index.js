import {Component} from 'react'

import CryptoCurrencyList from '../CryptocurrenciesList'

import './index.css'

// Sai Teja's Code

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-con">
        <h1 className="header">Cryptocurrency Tracker</h1>
        <img
          className="main-img"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <CryptoCurrencyList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
