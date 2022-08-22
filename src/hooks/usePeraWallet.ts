import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { useEffect, useMemo, useState } from 'react';
import { myAddress, NodeEnv, nodeEnv } from '../../lib/constants';

const peraWallet = new PeraWalletConnect();

export const usePeraWallet = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = useMemo(
    () => !!accountAddress,
    [accountAddress]
  );
  useEffect(() => {
    if (nodeEnv != NodeEnv.DEV) {
      peraWallet.reconnectSession().then((accounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      });
    }
  }, []);

  return {
    accountAddress,
    isConnectedToPeraWallet,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  };
  function handleConnectWalletClick() {
    if (nodeEnv != NodeEnv.DEV) {
      peraWallet.connect().then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);
        console.log('got account ', newAccounts[0]);
        setAccountAddress(newAccounts[0]);
      });
    } else {
      setAccountAddress(myAddress);
    }
  }

  function handleDisconnectWalletClick() {
    if (nodeEnv != NodeEnv.DEV) {
      peraWallet.disconnect();
    }

    setAccountAddress(null);
  }
};

export const signAndSend = async (
  accountAddress: string,
  txns: any[],
  algod: any
) => {
  try {
    algosdk.assignGroupID(txns);
    const multipleTxnGroups = txns.map((txn) => {
      return { txn, signers: [accountAddress] };
    });
    const signedTxns = await peraWallet.signTransaction([multipleTxnGroups]);
    const { txId } = await algod.sendRawTransaction(signedTxns).do();
    console.log({ txId });
    //const completedTx = await verboseWaitForConfirmation(algod, createTxId);
  } catch (error) {
    console.log("Couldn't sign Opt-in txns", error);
  }
};
