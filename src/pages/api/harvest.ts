import algosdk from 'algosdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { approvalHash, nft1, nft2, PlantStage } from '@lib/constants';
import dbConnect from '@lib/util/dbConnect';
import { createUser, getUserNonce } from '@lib/util/backend';
import { Plant } from '@src/models';
import { getPlantStage } from '@lib/util';

export const makeHarvestSignature = async (
  wallet: string,
  nonce: number,
  plantId: string
) => {
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
  for (let x of Buffer.from(wallet)) {
    messageInts.push(x);
  }
  for (let x of Buffer.from(':')) {
    messageInts.push(x);
  }
  for (let x of algosdk.encodeUint64(nonce)) {
    messageInts.push(x);
  }
  for (let x of Buffer.from(':')) {
    messageInts.push(x);
  }
  for (let x of algosdk.encodeUint64(plant.assetId)) {
    messageInts.push(x);
  }
  const message = new Uint8Array(messageInts);
  const signature = algosdk.tealSign(account.sk, message, approvalHash);
  const asa1 = plant.assetId;
  const asa2 = nft2;
  return { message, signature, asa1, asa2 };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { wallet, id } = req.body;

  await dbConnect();

  const user = await createUser(wallet);
  const nonce = await getUserNonce(wallet);
  const { message, signature, asa1, asa2 } = await makeHarvestSignature(
    wallet,
    nonce,
    id
  );

  console.log({ message, signature, nonce, asa1, asa2 });
  res.status(200).json({
    signature,
    message,
    nonce,
    asa1,
    asa2,
  });
}
