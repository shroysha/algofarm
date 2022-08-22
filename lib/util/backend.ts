import { getAccountInfo } from '@lib/algosdk';
import { minterId } from '@lib/constants';
import { Plant, User } from '@src/models';
import { getAllOurNftAsas } from '.';

export const createUser = async (wallet: string) => {
  let user = await User.findOne({ wallet });
  if (user == null) {
    user = await User.create({
      wallet,
    });
  }
  return user;
};

export const syncPlants = async (wallet: string) => {
  const user = await createUser(wallet);

  const ourAsaBalances = await getAllOurNftAsas(wallet);
  console.log({ ourAsaBalances });

  const dbOps = [];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  for (let asaBalance of ourAsaBalances) {
    const assetId = asaBalance['asset-id'];
    const amount = asaBalance['amount'];
    const plantsBefore = await Plant.count({ owner: user.wallet, assetId });

    const assetsToCreate: any = [];
    for (let i = plantsBefore; i < amount; i++) {
      assetsToCreate.push({
        assetId,
        lastWateredTime: yesterday.getTime(),
        owner: user.wallet,
      });
    }
    console.log('creating', assetId, plantsBefore, assetsToCreate);
    dbOps.push(
      new Promise<void>(async (resolve, reject) => {
        try {
          await Plant.create(assetsToCreate);
          resolve();
        } catch (e: any) {
          console.error(e);
          resolve();
        }
      })
    );

    let numToDelete = plantsBefore - amount;
    console.log('deleting', assetId, plantsBefore, numToDelete);
    if (numToDelete > 0) {
      let idsToDelete: any[] = [];
      const harvesting = await Plant.findOne({
        assetId,
        owner: user.wallet,
        isBeingHarvest: true,
      });

      if (harvesting != null) {
        numToDelete--;
        idsToDelete.push(harvesting._id);
      }

      const ids = (
        await Plant.find({ assetId, owner: user.wallet, isBeingHarvest: false })
          .sort({
            timesWatered: -1,
          })
          .limit(numToDelete)
      ).map((plant) => plant._id);

      idsToDelete = idsToDelete.concat(ids);
      console.log('deleting', ids);
      dbOps.push(
        new Promise<void>(async (resolve, reject) => {
          try {
            await Plant.deleteMany({ _id: { $in: idsToDelete } });
            resolve();
          } catch (e: any) {
            console.error(e);
            resolve();
          }
        })
      );
    }
  }
  await Promise.all(dbOps);

  return await Plant.find({ owner: user.wallet });
};

export const getUserNonce = async (wallet: string) => {
  const accountInfo = await (await getAccountInfo(wallet)).do();

  const appLocalStates = accountInfo['apps-local-state'];
  for (let appState of appLocalStates) {
    if (appState.id === minterId) {
      for (let keyValue of appState['key-value']) {
        const utfKey = Buffer.from(keyValue.key, 'base64').toString();
        if (utfKey === 'nonce') {
          return keyValue.value.uint as number;
        }
      }
    }
  }

  throw new Error('User has not opted in');
};
