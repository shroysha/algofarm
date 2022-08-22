import { IPlant } from '@lib/types';
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
      <img src={`images/watermelon/${plant.assetId}.png`} />
      <WateredComponent plant={plant} />
      <ActionOverlay plant={plant} />
    </div>
  );
};
