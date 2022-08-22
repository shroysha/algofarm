export const minterId = 106117171;
export const minterContract =
  'SJBQYSFLDZ6W4LZ3O6HEJMOVWXQ6CLT2OSZZEVMPRHKJ5JPFVR57F4T6EM';
export const approvalHash =
  'R2EKCW5HUTVLAOV7K3T3S7BFA34PM5JP654EZUTNLTBB5LVCL7CTBSU3E4';
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
