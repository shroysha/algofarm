export type HarvestBody = {
  wallet: string;
};

export type HarvestResponse = {
  signature: Uint8Array;
};

export interface IUser {
  wallet: string;
}

export interface IPlant {
  assetId: number;
  timesWatered: number;
  owner: string;
  lastWateredTime: number;
  _id: any;
}
