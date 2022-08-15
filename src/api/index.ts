import { HarvestResponse } from '../types';

export const fetchSignature = async () => {
  const response = await fetch('api/harvest', {
    method: 'POST',
  });
  const res = (await response.json()) as HarvestResponse;
  return res.signature;
};
