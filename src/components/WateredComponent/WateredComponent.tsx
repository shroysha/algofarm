import { IPlant } from '@lib/types';
import { useMemo } from 'react';

interface WateredComponentProps {
  plant: IPlant;
}

export const WateredComponent = ({ plant }: WateredComponentProps) => {
  const show1 = useMemo(() => plant.timesWatered >= 1, [plant.timesWatered]);
  const show2 = useMemo(() => plant.timesWatered >= 2, [plant.timesWatered]);

  return (
    <div className="grid grid-cols-2">
      <div style={{ backgroundColor: show1 ? '#007577' : '' }}> &nbsp;</div>
      <div style={{ backgroundColor: show2 ? '#007577' : '' }}> &nbsp;</div>
    </div>
  );
};
