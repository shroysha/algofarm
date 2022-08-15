import algosdk, { decodeAddress } from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { minterContract, nft1 } from '../../src/constants';
import { HarvestBody, HarvestResponse } from '../../src/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HarvestResponse>
) {
  const {} = req.body as HarvestBody;
  const privateKey = process.env.PRIVATE_KEY;
  if (privateKey == null) {
    throw new Error('Private key not defined');
  }

  const nonce = 0;
  const message = 'ProgData' + decodeAddress(minterContract) + nonce + nft1;
  const toSign = new Uint8Array(Buffer.from(message));
  const sk = new Uint8Array(Buffer.from(privateKey));
  const signature = algosdk.signBytes(toSign, sk);

  res.status(200).json({ signature });
}
