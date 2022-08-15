import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';

const minterId = 105061239;
const minterContract =
  '34RYJJ52VXNBPL3HMZ6AOQCNV3RS73T756SNGVKFRMUN5WI7WVSQTNWAKY';
const nft1 = 105011818;
const nft2 = 105040567;

// Create the PeraWalletConnect instance outside of the component
const peraWallet = new PeraWalletConnect();

const makeSdk = async () => {
  // Setting up algosdk client
  const algod = new algosdk.Algodv2(
    '',
    'https://node.testnet.algoexplorerapi.io/',
    443
  );
  const suggestedParams = await algod.getTransactionParams().do();

  return { algod, suggestedParams };
};

const signAndSend = async (txns: any[], algod: any) => {
  try {
    const signedTxns = await peraWallet.signTransaction([txns]);
    const { txId } = await algod.sendRawTransaction(signedTxns).do();
    console.log({ txId });
    //const completedTx = await verboseWaitForConfirmation(algod, createTxId);
  } catch (error) {
    console.log("Couldn't sign Opt-in txns", error);
  }
};

const Home: NextPage = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet.reconnectSession().then((accounts) => {
      // Setup the disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });
  }, []);

  const optIn = useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    // Setting up Transactions
    const opt1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: accountAddress,
      to: accountAddress,
      assetIndex: nft1,
      amount: 0,
      suggestedParams,
    });
    const opt2 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: accountAddress,
      to: accountAddress,
      assetIndex: nft2,
      amount: 0,
      suggestedParams,
    });

    const multipleTxnGroups = [
      { txn: opt1, signers: [accountAddress] },
      { txn: opt2, signers: [accountAddress] },
    ];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);

  const doBurn = useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const opContract = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [new Uint8Array(Buffer.from('hi'))],
      undefined,
      undefined,
      [nft1, nft2]
    );
    const burnTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: accountAddress,
      to: minterContract,
      assetIndex: nft1,
      amount: 1,
      suggestedParams,
    });

    const multipleTxnGroups = [
      { txn: opContract, signers: [accountAddress] },
      { txn: burnTxn, signers: [accountAddress] },
    ];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);

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

  function handleConnectWalletClick() {
    peraWallet.connect().then((newAccounts) => {
      // Setup the disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);
      console.log('got account ', newAccounts[0]);
      setAccountAddress(newAccounts[0]);
    });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();

    setAccountAddress(null);
  }
};

export default Home;
