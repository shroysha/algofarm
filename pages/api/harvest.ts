import algosdk, { decodeAddress } from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { minterContract, nft1 } from '../../src/constants';
import { HarvestBody, HarvestResponse } from '../../src/types';
import { getPrivateKey, getPublicKey } from '../../src/util';
import * as ed from '@noble/ed25519';

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
  res: NextApiResponse<HarvestResponse>
) {
  const {} = req.body as HarvestBody;

  const nonce = 0;

  const messageInts: number[] = [];
  // for (let x of new Uint8Array(Buffer.from('ProgData'))) {
  //   messageInts.push(x);
  // }
  // for (let x of decodeAddress(minterContract).checksum) {
  //   messageInts.push(x);
  // }
  console.log(Buffer.from(algosdk.encodeUint64(nonce)).readUInt32BE());
  messageInts.push(Buffer.from(algosdk.encodeUint64(nonce)).readUInt32BE());
  for (let x of new Uint8Array(Buffer.from('' + nft1))) {
    messageInts.push(x);
  }

  const message = new Uint8Array(messageInts);
  const signature = await ed.sign(message, getPrivateKey());
  const isValid = await ed.verify(signature, message, getPublicKey());

  console.log({ message, signature, isValid });
  res.status(200).json({ signature });
}
