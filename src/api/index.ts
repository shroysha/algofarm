import { HarvestResponse } from '../types';

export const fetchSignature = async () => {
  const response = await fetch('api/harvest', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  return Uint8Array.from(res.signature);
};
