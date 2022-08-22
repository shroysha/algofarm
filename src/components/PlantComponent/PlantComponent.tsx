import { IPlant } from '@lib/types';
import { getPlantImage } from '@lib/util';
import { ActionOverlay } from '../ActionOverlay/ActionOverlay';
import { WateredComponent } from '../WateredComponent/WateredComponent';

interface PlantComponentProps {
  plant: IPlant;
}

export const PlantComponent = ({ plant }: PlantComponentProps) => {
  return (
    <div
      key={`${plant.assetId}-${plant.lastWateredTime}`}
      className="relative border-8 border-black"
    >
      <img src={getPlantImage(plant.assetId)} />
      <WateredComponent plant={plant} />
      <ActionOverlay plant={plant} />
    </div>
  );
};
