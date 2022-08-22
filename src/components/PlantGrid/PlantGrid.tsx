import React from 'react';
import { PlantComponent } from '@src/components';
import { IPlant } from '@lib/types';

interface PlantGridProps {
  plants: IPlant[];
}

export const PlantGrid = ({ plants }: PlantGridProps) => {
  return (
    <div className="bg-stone-400 m-10 p-5">
      <div className="grid grid-cols-4 gap-4 m-10  overflow-y-hidden">
        {plants.map((plant: IPlant, i: number) => {
          return <PlantComponent plant={plant} />;
        })}
      </div>
    </div>
  );
};
