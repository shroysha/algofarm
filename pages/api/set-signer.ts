import algosdk, { decodeAddress } from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { minterContract, nft1 } from '../../src/constants';
import { HarvestBody, HarvestResponse } from '../../src/types';
import * as ed from '@noble/ed25519';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const privateKey = ed.utils.randomPrivateKey();
  const publicKey = await ed.getPublicKey(privateKey);

  res.status(200).json({ privateKey, publicKey });
}
