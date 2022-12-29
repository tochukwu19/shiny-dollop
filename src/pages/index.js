import React, {useState, useEffect} from 'react';
import Styles from "../styles/home.module.scss";
import Layout from '../components/layout';
import axios from 'axios';



export default function Home(props) {

  const [coins, setCoins] = useState([]);
  const [markets, setMarket] = useState([]);
  const [nft, setNft] = useState([]);

  useEffect(() => {

    // Fetch Coins
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));

    // Fetch Market Leaders
    axios.get('https://api.coingecko.com/api/v3/search/trending')
    .then(res => {
      setMarket(res.data.coins);
      console.log(res.data);
    }).catch(error => console.log(error));

     // Fetch Event
    axios.get('https://api.coingecko.com/api/v3/nfts/list')
    .then(res => {
      setNft(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));


  }, []);

  
  return (
    <>
       <Layout>
          <div className={Styles.mainSection}>
            <div className={Styles.content}>
              <div className={Styles.marketLeaders}>
                  <div className={Styles.container}>
                    <h2>Market Leaders</h2>
                    {markets.map(market => {
                      return(
                        <div key={market.id} className={Styles.leaders}>
                          <p className={Styles.name}>{market.item.name} ({market.item.symbol})</p>
                          <em>{market.item.market_cap_rank}</em>
                          <p className={Styles.value}>${Number(market.item.price_btc).toFixed(10)}</p>
                        </div>
                      )
                    })}
                  </div>
              </div>

              <div className={Styles.coins}>
                  <div className={Styles.container}>
                    <h2>All Coins</h2>
                    <div className={Styles.coin}>
                      {coins.map(coin => {
                        return (
                        <p key={coin.symbol} className={Styles.name}>{coin.name} ({coin.symbol})</p>
                      )})}
                    </div>
                  </div>
              </div>
            </div>

            <div className={Styles.aside}>
              <div className={Styles.eventContainer}>
                <h2>NFTs</h2>
                {nft.map(nft => {
                  return (
                    <div className={Styles.event} key={nft.id}>
                      <h4>{nft.name}</h4>
                      <p>{nft.asset_platform_id}</p>
                      <em>{nft.symbol}</em>
                    </div>
                  )})}
              </div>
            </div>
          </div>
       </Layout>
    </>
  )
}
