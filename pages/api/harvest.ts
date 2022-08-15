import algosdk, { decodeAddress } from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { minterContract, nft1 } from '../../src/constants';
import { HarvestBody, HarvestResponse } from '../../src/types';

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

  const nonce = 0;
  const message = 'ProgData' + decodeAddress(minterContract) + nonce + nft1;
  const toSign = new Uint8Array(Buffer.from(message));
  const signature = algosdk.signBytes(toSign, sk);

  console.log(signature);
  res.status(200).json({ signature });
}
