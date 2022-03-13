import React from 'react'
import './Coin.css'
const Coin = ({ name, image, symbol, price, volume, priceChange,marketCap }) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className='coin'>
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">R$ {price}</p>
                    <p className="coin-volume">R$ {volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coint-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                    <p className="coint-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt cap : {marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>     
    );
};

export default Coin