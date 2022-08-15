import algosdk from 'algosdk';
import { useCallback } from 'react';
import { makeSdk } from '../../algosdk';
import { fetchSignature } from '../../api';
import { minterContract, minterId, nft1, nft2 } from '../../constants';
import { signAndSend } from '../../pera';

export const useOptInCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
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
    const opt3 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: accountAddress,
      to: accountAddress,
      assetIndex: minterId,
      amount: 0,
      suggestedParams,
    });

    algosdk.assignGroupID([opt1, opt2, opt3]);

    const multipleTxnGroups = [
      { txn: opt1, signers: [accountAddress] },
      { txn: opt2, signers: [accountAddress] },
      { txn: opt3, signers: [accountAddress] },
    ];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);
};

export const useDoBurnCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const signature = await fetchSignature();
    console.log({ signature });

    const opContract = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [
        new Uint8Array(Buffer.from('harvest')),
        new Uint8Array(Buffer.from('' + nft1)),
        new Uint8Array(Buffer.from('0')),
        new Uint8Array(Buffer.from(signature)),
      ],
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

    algosdk.assignGroupID([opContract, burnTxn]);

    const multipleTxnGroups = [
      { txn: opContract, signers: [accountAddress] },
      { txn: burnTxn, signers: [accountAddress] },
    ];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);
};
