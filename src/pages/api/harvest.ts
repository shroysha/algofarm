import algosdk from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { approvalHash, nft1, PlantStage } from '@lib/constants';
import dbConnect from '@lib/util/dbConnect';
import { createUser, getUserNonce } from '@lib/util/backend';
import { Plant } from '@src/models';
import { getPlantStage } from '@lib/util';

export const makeHarvestSignature = async (nonce: number, plantId: string) => {
  const plant = await Plant.findOneAndDelete({
    _id: plantId,
  });

  if (plant == null || getPlantStage(plant) != PlantStage.ReadyToHarvest) {
    throw new Error('Trying to harvest a plant that does not exist');
  }
  if (process.env.SIGNER_MONIC == null) {
    throw new Error('signer monic not defined');
  }
  const account = algosdk.mnemonicToSecretKey(process.env.SIGNER_MONIC);
  const messageInts: number[] = [];
  for (let x of algosdk.encodeUint64(nonce)) {
    messageInts.push(x);
  }
  for (let x of algosdk.encodeUint64(plant.assetId)) {
    messageInts.push(x);
  }
  const message = new Uint8Array(messageInts);
  const signature = algosdk.tealSign(account.sk, message, approvalHash);
  return { message, signature };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { wallet, id } = req.body;

  await dbConnect();

  const user = await createUser(wallet);
  const nonce = await getUserNonce(wallet);
  const { message, signature } = await makeHarvestSignature(nonce, id);

  console.log({ message, signature, nonce });
  res.status(200).json({
    signature,
    message,
  });
}
