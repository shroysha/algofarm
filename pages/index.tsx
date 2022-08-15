import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { usePeraWallet } from '../src/pera';
import { useDoBurnCallback, useOptInCallback } from '../src/algofarm/callbacks';

// Create the PeraWalletConnect instance outside of the component

const Home: NextPage = () => {
  const {
    accountAddress,
    isConnectedToPeraWallet,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  } = usePeraWallet();
  const optIn = useOptInCallback(accountAddress);
  const doBurn = useDoBurnCallback(accountAddress);

  return (
    <>
      <Head>
        <meta name="name" content="My dApp" />
      </Head>
      <button
        onClick={
          isConnectedToPeraWallet
            ? handleDisconnectWalletClick
            : handleConnectWalletClick
        }
      >
        {isConnectedToPeraWallet ? 'Disconnect' : 'Connect to Pera Wallet'}
      </button>
      ,<button onClick={optIn}>Opt In</button>,
      <button onClick={doBurn}>Burn</button>
    </>
  );
};

export default Home;
