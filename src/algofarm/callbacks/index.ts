import algosdk from 'algosdk';
import { useCallback } from 'react';
import { makeSdk } from '../../algosdk';
import { fetchSignature, fetchSigners } from '../../api';
import { minterContract, minterId, nft1, nft2 } from '../../constants';
import { signAndSend } from '../../pera';

const makeNothing = (
  accountAddress: string,
  suggestedParams: any,
  id: number
) => {
  const opContract = algosdk.makeApplicationNoOpTxn(
    accountAddress,
    suggestedParams,
    minterId,
    [new Uint8Array(Buffer.from('nothing')), algosdk.encodeUint64(id)]
  );

  return opContract;
};

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
    const opt3 = algosdk.makeApplicationOptInTxn(
      accountAddress,
      suggestedParams,
      minterId
    );

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
    const s = await fetchSignature();
    console.log({ s });

    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const { signature, message } = await fetchSignature();
    console.log({ signature });

    const opContract = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [
        new Uint8Array(Buffer.from('harvest')),
        new Uint8Array(Buffer.from('' + nft1)),
        algosdk.encodeUint64(0),
        signature,
        message,
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
    const opt1 = makeNothing(accountAddress, suggestedParams, 0);
    const opt2 = makeNothing(accountAddress, suggestedParams, 1);
    const opt3 = makeNothing(accountAddress, suggestedParams, 2);
    const opt4 = makeNothing(accountAddress, suggestedParams, 3);
    const opt5 = makeNothing(accountAddress, suggestedParams, 4);
    const opt6 = makeNothing(accountAddress, suggestedParams, 5);
    // const opt7 = makeNothing(accountAddress, suggestedParams, 6);
    // const opt8 = makeNothing(accountAddress, suggestedParams, 7);
    // const opt9 = makeNothing(accountAddress, suggestedParams, 8);

    algosdk.assignGroupID([
      opContract,
      burnTxn,
      // opt1,
      // opt2,
      // opt3,
      // opt4,
      // opt5,
      // opt6,
      // opt7,
      // opt8,
      // opt9,
    ]);

    const multipleTxnGroups = [
      { txn: opContract, signers: [accountAddress] },
      { txn: burnTxn, signers: [accountAddress] },
      // { txn: opt1, signers: [accountAddress] },
      // { txn: opt2, signers: [accountAddress] },
      // { txn: opt3, signers: [accountAddress] },
      // { txn: opt4, signers: [accountAddress] },
      // { txn: opt5, signers: [accountAddress] },
      // { txn: opt6, signers: [accountAddress] },
      // { txn: opt7, signers: [accountAddress] },
      // { txn: opt8, signers: [accountAddress] },
      // { txn: opt9, signers: [accountAddress] },
    ];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);
};

export const useSetSignerCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const { publicKey } = await fetchSigners();
    console.log({
      publicKey: publicKey.map((e) => Number(e)),
    });

    // const opContract = algosdk.makeApplicationNoOpTxn(
    //   accountAddress,
    //   suggestedParams,
    //   minterId,
    //   [new Uint8Array(Buffer.from('setSigner')), publicKey]
    // );
    const opContract2 = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [new Uint8Array(Buffer.from('optIn')), publicKey],
      undefined,
      undefined,
      [nft1, nft2]
    );

    algosdk.assignGroupID([opContract2]);

    const multipleTxnGroups = [{ txn: opContract2, signers: [accountAddress] }];

    await signAndSend(multipleTxnGroups, algod);
  }, [accountAddress]);
};
