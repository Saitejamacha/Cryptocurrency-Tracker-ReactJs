import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

// Sai Teja's Code

class CryptoCurrencyList extends Component {
  state = {currency: [], isLoading: true}

  componentDidMount() {
    this.getCurrency()
  }

  getCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCurrency = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(updatedCurrency)
    this.setState({currency: updatedCurrency, isLoading: false})
  }

  renderCurrencyTable = () => {
    const {currency, isLoading} = this.state

    return (
      <div className="currency-con">
        <div className="top-con">
          <h1>Coin Type</h1>
          <h1>USD</h1>
          <h1>EURO</h1>
        </div>
        {currency.map(eachCurrency => (
          <CryptoCurrencyItem
            key={eachCurrency.id}
            currencyDetails={eachCurrency}
          />
        ))}
      </div>
    )
  }

  render() {
    const {currency, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyTable()
        )}
      </div>
    )
  }
}

export default CryptoCurrencyList
