import { syncPlants } from '@lib/util/backend';
import dbConnect from '@lib/util/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { wallet } = req.query;
  if (typeof wallet != 'string') {
    throw new Error('Invalid value for wallet');
  }

  await dbConnect();

  const plants = await syncPlants(wallet);

  return res.status(200).json({ plants });
}
