import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import {PeraWalletConnect} from "@perawallet/connect";

// Create the PeraWalletConnect instance outside of the component
const peraWallet = new PeraWalletConnect();


const Home: NextPage = () => {

  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet.reconnectSession().then((accounts) => {
      // Setup the disconnect event listener
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });
  }, []);

  const optIn = useCallback(() => {

  }, []) 

  return <>
  <Head>
  <meta name="name" content="My dApp" />

  </Head>
    <button
      onClick={
        isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick
      }>
      {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
    </button>,
    <button onClick={optIn}>Opt In</button>
  </>

  
   function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
        console.log("got account ", newAccounts[0])
        setAccountAddress(newAccounts[0]);
      })
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();

    setAccountAddress(null);
  }
}

export default Home
