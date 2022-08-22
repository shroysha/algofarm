import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IPlant } from '@lib/types';
import { signAndSend, usePeraWallet } from './usePeraWallet';
import { responseToUint, getAsaBalance, sleep } from '@lib/util';
import { makeSdk } from '@lib/algosdk';
import algosdk from 'algosdk';
import { minterContract, minterId } from '@lib/constants';
import { makeNothing } from '@src/callbacks';

export enum ModalType {
  Error = 0,
  Loading = 1,
}

interface ModalInput {
  message: string;
  modalType: ModalType;
}

interface AlgardenContextInterface {
  plants: IPlant[];
  accountAddress: string | null;
  isConnectedToPeraWallet: boolean;
  handleConnectWalletClick: () => void;
  handleDisconnectWalletClick: () => void;
  doWaterPlant: (plant: IPlant) => Promise<void>;
  doHarvestPlant: (plant: IPlant) => Promise<void>;
  modalInput: ModalInput | null;
  setModalInput: React.Dispatch<React.SetStateAction<ModalInput | null>>;
}

const notInit = () => {
  throw new Error('not init');
};
const AlgardenContext = createContext<AlgardenContextInterface>({
  plants: [],
  accountAddress: null,
  isConnectedToPeraWallet: false,
  handleConnectWalletClick: notInit,
  handleDisconnectWalletClick: notInit,
  doWaterPlant: notInit,
  modalInput: null,
  setModalInput: notInit,
  doHarvestPlant: notInit,
});

interface AlgardenProviderProps {
  children: React.ReactNode;
}

export const AlgardenProvider = ({ children }: AlgardenProviderProps) => {
  const [modalInput, setModalInput] = useState<ModalInput | null>(null);
  const [plants, setPlants] = useState<IPlant[]>([]);
  const {
    accountAddress,
    isConnectedToPeraWallet,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  } = usePeraWallet();

  const fetchPlants = useCallback(async () => {
    try {
      setModalInput({
        message: 'Getting wallet contents...',
        modalType: ModalType.Loading,
      });
      const plants = (
        await (await fetch(`api/plants/${accountAddress}`)).json()
      ).plants;
      console.log({ plants });
      setPlants(
        plants.sort((a: IPlant, b: IPlant) => {
          if (a.assetId !== b.assetId) {
            return b.assetId - a.assetId;
          } else if (a.timesWatered !== b.timesWatered) {
            return b.timesWatered - a.timesWatered;
          } else {
            return b.lastWateredTime - a.lastWateredTime;
          }
        })
      );
    } finally {
      setModalInput(null);
    }
  }, [accountAddress, setPlants]);

  useEffect(() => {
    const run = async () => {
      if (accountAddress == null) {
        setPlants([]);
        return;
      }
      await fetchPlants();
    };
    run();
  }, [accountAddress]);

  const doWaterPlant = useCallback(
    async (plant: IPlant) => {
      try {
        setModalInput({
          message: 'Watering plant',
          modalType: ModalType.Loading,
        });
        console.log({
          wallet: accountAddress,
          id: plant._id,
        });
        await fetch(`api/water`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            wallet: accountAddress,
            id: plant._id,
          }),
        });
      } finally {
        await fetchPlants();
      }
    },
    [accountAddress]
  );
  const doHarvestPlant = useCallback(
    async (plant: IPlant) => {
      if (accountAddress == null) {
        return;
      }
      try {
        setModalInput({
          message: 'Harvesting plant... Please approve in your Pera wallet',
          modalType: ModalType.Loading,
        });
        const response = await fetch(`api/harvest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            wallet: accountAddress,
            id: plant._id,
          }),
        });
        const res = (await response.json()) as any;

        const signature = responseToUint(res.signature);
        const message = responseToUint(res.message);
        const { asa1, asa2, nonce } = res;

        const initBalance = await getAsaBalance(accountAddress, asa2);

        const { algod, suggestedParams } = await makeSdk();

        const opContract = algosdk.makeApplicationNoOpTxn(
          accountAddress,
          suggestedParams,
          minterId,
          [
            new Uint8Array(Buffer.from('harvest')),
            new Uint8Array(Buffer.from('' + asa1)),
            algosdk.encodeUint64(nonce),
            signature,
            message,
          ],
          undefined,
          undefined,
          [asa1, asa2]
        );
        const burnTxn =
          algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            from: accountAddress,
            to: minterContract,
            assetIndex: plant.assetId,
            amount: 1,
            suggestedParams,
          });
        const opt1 = makeNothing(accountAddress, suggestedParams, 0);
        const opt2 = makeNothing(accountAddress, suggestedParams, 1);

        await signAndSend(
          accountAddress,
          [opContract, burnTxn, opt1, opt2],
          algod
        );

        setModalInput({
          message: 'Inspecting plants...',
          modalType: ModalType.Loading,
        });
        while (initBalance === (await getAsaBalance(accountAddress, asa2))) {
          await sleep(500);
        }
      } finally {
        await fetchPlants();
      }
    },
    [accountAddress]
  );

  return (
    <AlgardenContext.Provider
      value={{
        plants,
        accountAddress,
        isConnectedToPeraWallet,
        handleConnectWalletClick,
        handleDisconnectWalletClick,
        doWaterPlant,
        modalInput,
        setModalInput,
        doHarvestPlant,
      }}
    >
      {children}
    </AlgardenContext.Provider>
  );
};

export const useAlgarden = () => {
  const appContext = useContext(AlgardenContext);
  return appContext;
};
