import { getAccountInfo } from '@lib/algosdk';
import { NftAsa, PlantStage, wateringsNeededToHarvest } from '@lib/constants';
import { IPlant } from '@lib/types';

export const responseToUint = (responseObject: any) => {
  const response: number[] = [];
  let counter = 0;
  while (true) {
    if (responseObject[counter] == null) {
      return new Uint8Array(response);
    } else {
      response.push(responseObject[counter]);
    }
    counter++;
  }
};

export const getPublicKey = () => {
  if (!process.env.NEXT_PUBLIC_KEY) {
    throw new Error('no public key');
  }
  return new Uint8Array(JSON.parse(process.env.NEXT_PUBLIC_KEY));
};

export const getPrivateKey = () => {
  if (!process.env.PRIVATE_KEY) {
    throw new Error('no private key');
  }
  return new Uint8Array(JSON.parse(process.env.PRIVATE_KEY));
};

export const getAllOurNftAsasList = () => {
  const nftAsaKeys = Object.keys(NftAsa).filter((item) => {
    return isNaN(Number(item));
  });
  return nftAsaKeys.map((key: string) => {
    return NftAsa[key as any];
  });
};

export const getAllOurNftAsas = async (wallet: string) => {
  const accountAssets = (await (await getAccountInfo(wallet)).do()).assets;
  const asaList = getAllOurNftAsasList();

  console.log({ accountAssets, asaList });
  return accountAssets.filter((listing: any) =>
    asaList.includes(listing['asset-id'])
  );
};

export function isReadyToWater(plant: IPlant) {
  const nextDay = new Date(plant.lastWateredTime);
  nextDay.setDate(nextDay.getDate() + 1);
  return new Date().getTime() >= nextDay.getTime();
}

export function isReadyToHarvest(plant: IPlant) {
  return (
    plant.timesWatered == wateringsNeededToHarvest && isReadyToWater(plant)
  );
}

export function getPlantStage(plant: IPlant) {
  return PlantStage.ReadyToHarvest;
  if (isReadyToHarvest(plant)) {
    return PlantStage.ReadyToHarvest;
  } else if (isReadyToWater(plant)) {
    return PlantStage.ReadyToWater;
  } else {
    return PlantStage.AlreadyWateredForDay;
  }
}

export async function getAsaBalance(wallet: string, asaId: number) {
  const asaBalances = await getAllOurNftAsas(wallet);
  for (let asaBalance of asaBalances) {
    if (asaBalance['asset-id'] === asaId) {
      return asaBalance['amount'] as number;
    }
  }
  return 0;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
