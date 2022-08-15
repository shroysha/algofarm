import { PeraWalletConnect } from '@perawallet/connect';
import { useEffect, useMemo, useState } from 'react';

const peraWallet = new PeraWalletConnect();

export const usePeraWallet = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = useMemo(
    () => !!accountAddress,
    [accountAddress]
  );
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

  return {
    accountAddress,
    isConnectedToPeraWallet,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  };
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

export const signAndSend = async (txns: any[], algod: any) => {
  try {
    const signedTxns = await peraWallet.signTransaction([txns]);
    const { txId } = await algod.sendRawTransaction(signedTxns).do();
    console.log({ txId });
    //const completedTx = await verboseWaitForConfirmation(algod, createTxId);
  } catch (error) {
    console.log("Couldn't sign Opt-in txns", error);
  }
};
