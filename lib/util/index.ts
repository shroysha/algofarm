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
    return parseInt(NftAsa[key as any]);
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

export function getNextPlant(assetId: number) {
  switch (assetId) {
    case NftAsa.Watermelon1:
      return NftAsa.Watermelon2;
    case NftAsa.Watermelon2:
      return NftAsa.Watermelon3;
    case NftAsa.Watermelon3:
      return NftAsa.Watermelon4;
    case NftAsa.Watermelon4:
      return NftAsa.Watermelon5;
    case NftAsa.Watermelon5:
      return NftAsa.Watermelon6;
    case NftAsa.Watermelon6:
      return NftAsa.Watermelon7;
    default:
      return null;
  }
}

export function getPlantImage(assetId: number) {
  switch (assetId) {
    case NftAsa.Watermelon1:
      return 'images/watermelon/1.png';
    case NftAsa.Watermelon2:
      return 'images/watermelon/2.png';
    case NftAsa.Watermelon3:
      return 'images/watermelon/3.png';
    case NftAsa.Watermelon4:
      return 'images/watermelon/4.png';
    case NftAsa.Watermelon5:
      return 'images/watermelon/5.png';
    case NftAsa.Watermelon6:
      return 'images/watermelon/6.png';
    case NftAsa.Watermelon7:
      return 'images/watermelon/7.png';
  }
}
