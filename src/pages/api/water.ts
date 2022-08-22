import type { NextApiRequest, NextApiResponse } from 'next';
import { PlantStage } from '@lib/constants';
import dbConnect from '@lib/util/dbConnect';
import { Plant } from '@src/models';
import { getPlantStage } from '@lib/util';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { wallet, id } = req.body;

  await dbConnect();

  console.log({ wallet, id });
  const plant = await Plant.findOne({ owner: wallet, _id: id });
  console.log('Found plant', { foundPlant: plant });

  if (getPlantStage(plant) != PlantStage.ReadyToWater) {
    throw new Error('not ready to water');
  }

  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);

  await Plant.findOneAndUpdate(
    {
      wallet,
      _id: id,
      lastWateredTime: plant.lastWateredTime,
    },
    {
      $inc: { timesWatered: 1 },
      $set: { lastWateredTime: new Date().getTime() },
    }
  );

  res.status(200).json({});
}
