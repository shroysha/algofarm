import algosdk from 'algosdk';
import { useCallback } from 'react';
import { makeSdk } from '@lib/algosdk';
import { minterId } from '@lib/constants';
import { signAndSend } from '@src/hooks';
import { getAllOurNftAsasList } from '@lib/util';

export const makeNothing = (
  accountAddress: string,
  suggestedParams: any,
  id: number
) => {
  const opContract = algosdk.makeApplicationNoOpTxn(
    accountAddress,
    suggestedParams,
    minterId,
    [new Uint8Array(Buffer.from('haha')), new Uint8Array([id])]
  );

  return opContract;
};

export const useOptInCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const asas = getAllOurNftAsasList();
    const txs = asas.map((asa) => {
      return algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        from: accountAddress,
        to: accountAddress,
        assetIndex: asa,
        amount: 0,
        suggestedParams,
      });
    });
    txs.push(
      algosdk.makeApplicationOptInTxn(accountAddress, suggestedParams, minterId)
    );

    await signAndSend(accountAddress, txs, algod);
  }, [accountAddress]);
};

export const useDoBurnCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
    // const s = await fetchSignature();
    // console.log({ s });
    // if (accountAddress == null) {
    //   return;
    // }
    // const { algod, suggestedParams } = await makeSdk();
    // const { signature, message } = await fetchSignature();
    // console.log({ signature });
    // const opContract = algosdk.makeApplicationNoOpTxn(
    //   accountAddress,
    //   suggestedParams,
    //   minterId,
    //   [
    //     new Uint8Array(Buffer.from('harvest')),
    //     new Uint8Array(Buffer.from('' + nft1)),
    //     algosdk.encodeUint64(0),
    //     signature,
    //     message,
    //   ],
    //   undefined,
    //   undefined,
    //   [nft1, nft2]
    // );
    // const burnTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    //   from: accountAddress,
    //   to: minterContract,
    //   assetIndex: nft1,
    //   amount: 1,
    //   suggestedParams,
    // });
    // const opt1 = makeNothing(accountAddress, suggestedParams, 0);
    // await signAndSend(accountAddress, [opContract, burnTxn, opt1], algod);
  }, [accountAddress]);
};

export const useSetSignerCallback = (accountAddress: string | null) => {
  return useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const { algod, suggestedParams } = await makeSdk();

    const opContract = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [new Uint8Array(Buffer.from('optIn'))],
      undefined,
      undefined,
      getAllOurNftAsasList()
    );

    await signAndSend(accountAddress, [opContract], algod);
  }, [accountAddress]);
};

export const useAsaWithdrawCallback = (
  accountAddress: string | null,
  asaRef: any,
  asaBalanceRef: any
) => {
  return useCallback(async () => {
    if (accountAddress == null) {
      return;
    }

    const asa = Number(asaRef.current.value);
    const asaBalance = Number(asaBalanceRef.current.value);

    console.log('transferring ', { asa, asaBalance });
    const { algod, suggestedParams } = await makeSdk();

    const opContract = algosdk.makeApplicationNoOpTxn(
      accountAddress,
      suggestedParams,
      minterId,
      [
        new Uint8Array(Buffer.from('withdraw')),
        algosdk.encodeUint64(asa),
        algosdk.encodeUint64(asaBalance),
      ],
      undefined,
      undefined,
      [asa]
    );

    await signAndSend(accountAddress, [opContract], algod);
  }, [accountAddress, asaRef, asaBalanceRef]);
};
