import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import algosdk from 'algosdk';
import { usePeraWallet } from '../hooks/usePeraWallet';
import {
  useAsaWithdrawCallback,
  useDoBurnCallback,
  useOptInCallback,
  useSetSignerCallback,
} from '../callbacks';

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
  const setSigner = useSetSignerCallback(accountAddress);

  const asaTypeInput = useRef<any>();
  const asaBalanceInput = useRef<any>();

  const useAsaWithdraw = useAsaWithdrawCallback(
    accountAddress,
    asaTypeInput,
    asaBalanceInput
  );

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
      <button onClick={setSigner}>Configure</button>,
      <button onClick={optIn}>Opt In</button>,
      <button onClick={doBurn}>Burn</button>
      <input ref={asaTypeInput}></input>
      <input ref={asaBalanceInput}></input>
      <button onClick={doAsaWithdraw}>Withdraw</button>
    </>
  );
};

export default Home;
