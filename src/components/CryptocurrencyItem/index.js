import './index.css'

// Sai Teja's Code

const CryptoCurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="li-con">
      <div className="currency-type-con">
        <img alt={currencyName} className="log-img" src={currencyLogo} />
        <p>{currencyName}</p>
      </div>
      <div className="curr-con">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
