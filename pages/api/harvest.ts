import algosdk, { decodeAddress } from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { minterContract, nft1 } from '../../src/constants';
import { HarvestBody, HarvestResponse } from '../../src/types';
// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */

function Utf8ArrayToStr(array: any) {
  var out, i, len, c;
  var char2, char3;

  out = '';
  len = array.length;
  i = 0;
  while (i < len) {
    c = array[i++];
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(
          ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
        );
        break;
    }
  }

  return out;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HarvestResponse>
) {
  const {} = req.body as HarvestBody;
  const monic = process.env.MONIC;
  if (monic == null) {
    throw new Error('Monic not defined');
  }
  console.log(monic);
  const sk = algosdk.mnemonicToSecretKey(monic).sk;
  console.log();
  const nonce = 0;
  const signer = decodeAddress(
    'FDKUZJVGIFUAYSJIH7CIQMDV4MH6ZLBHEXFHFENWDS3RRZPGVTWFLQZMLU'
  ).publicKey;

  const messageInts: number[] = [];
  for (let x of new Uint8Array(Buffer.from('ProgData'))) {
    messageInts.push(x);
  }
  for (let x of decodeAddress(minterContract).checksum) {
    messageInts.push(x);
  }
  console.log(Buffer.from(algosdk.encodeUint64(nonce)).readUInt32BE());
  messageInts.push(Buffer.from(algosdk.encodeUint64(nonce)).readUInt32BE());
  for (let x of new Uint8Array(Buffer.from('' + nft1))) {
    messageInts.push(x);
  }

  const toSign = new Uint8Array(messageInts);
  const signature = algosdk.signBytes(toSign, sk);

  console.log({
    toSign: Utf8ArrayToStr(toSign),
    signature: Utf8ArrayToStr(signature),
    signer: Utf8ArrayToStr(signer),
  });
  res.status(200).json({ signature });
}
