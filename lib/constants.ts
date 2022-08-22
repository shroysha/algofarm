export const minterId = 106113786;
export const minterContract =
  'YLOIWKSSC5MI4NN5Y65JZHXN2CVF4UP3QBITKHAR5BO7WS74YKSLOMPH2Q';
export const approvalHash =
  'WZOHVL747VSLCVC7HQ22L2M23S5Y7PRFSTSXMAUPJ4WPJMEUCUQS7OBAOM';
export const nft1 = 105011818;
export const nft2 = 105040567;

export enum NodeEnv {
  DEV = 'dev',
  PROD = 'production',
}

if (process.env.NEXT_PUBLIC_NODE_ENV == null) {
  throw new Error('NEXT_PUBLIC_NODE_ENV not defined');
}
export const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV;
export const myAddress =
  '6AO6AOWE2I4FBW4MG4FMI7IODP72RN4YTSWCGPDIOWHV7652RMISTC5DRQ';

export enum NftAsa {
  Watermelon1 = 105011818,
  Watermelon2 = 105040567,
}
export const wateringsNeededToHarvest = 2;

export enum PlantStage {
  ReadyToWater = 1,
  ReadyToHarvest = 2,
  AlreadyWateredForDay = 3,
}
