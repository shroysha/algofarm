import { PlantStage } from '@lib/constants';
import { getPlantStage } from '@lib/util';
import { useMemo } from 'react';
import { useAlgarden } from '@src/hooks';
import { IPlant } from '@lib/types';

interface PlantComponentProps {
  plant: IPlant;
}

export const ActionOverlay = ({ plant }: PlantComponentProps) => {
  const { doWaterPlant, doHarvestPlant } = useAlgarden();

  const plantStage = useMemo(() => getPlantStage(plant), [plant]);
  return (
    <>
      {plantStage == PlantStage.ReadyToHarvest ? (
        <div
          onClick={() => doHarvestPlant(plant)}
          className="select-none opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
        >
          Harvest
        </div>
      ) : plantStage == PlantStage.ReadyToWater ? (
        <div
          onClick={() => doWaterPlant(plant)}
          className="select-none opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
        >
          Water
        </div>
      ) : (
        <div
          onClick={() => console.log('must wait')}
          className="select-none opacity-0 hover:opacity-100 duration-300 absolute  inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
        >
          Wait
        </div>
      )}
    </>
  );
};
