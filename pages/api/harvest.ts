import algosdk from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { approvalHash, nft1 } from '../../src/constants';
import { HarvestBody } from '../../src/types';
import dbConnect from '../../src/util/dbConnect';
import User from '../../src/models/User';

// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { wallet } = req.body as HarvestBody;

  await dbConnect();

  const user = await User.findOneAndUpdate(
    {
      wallet,
    },
    { $inc: { nonce: 1 } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  const nonce = user.nonce - 1;

  // for (let x of new Uint8Array(Buffer.from('ProgData'))) {
  //   messageInts.push(x);
  // }
  // for (let x of [
  //   65, 187, 254, 78, 23, 85, 20, 30, 4, 219, 134, 215, 88, 101, 69, 223, 218,
  //   203, 241, 217, 175, 1, 122, 130, 170, 154, 44, 101, 18, 161, 138, 217,
  // ]) {
  //   messageInts.push(x);
  // }
  // console.log(Buffer.from(algosdk.encodeUint64(nonce)).readUInt32BE());
  // messageInts.push(nonce);
  // for (let x of )) {
  //   messageInts.push(x);
  // }

  if (process.env.SIGNER_MONIC == null) {
    throw new Error('signer monic not defined');
  }
  const account = algosdk.mnemonicToSecretKey(process.env.SIGNER_MONIC);
  //const message = new Uint8Array(Buffer.from('' + nonce + '' + nft1));
  const messageInts: number[] = [];
  for (let x of algosdk.encodeUint64(nonce)) {
    messageInts.push(x);
  }
  for (let x of algosdk.encodeUint64(nft1)) {
    messageInts.push(x);
  }
  const message = new Uint8Array(messageInts);
  const signature = algosdk.tealSign(account.sk, message, approvalHash);

  console.log({ message, signature, account: account.addr });
  res.status(200).json({
    signature,
    message,
  });
}
