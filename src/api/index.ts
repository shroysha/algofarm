import { HarvestResponse } from '../types';

export const fetchSignature = async () => {
  const response = await fetch('api/harvest', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  console.log({ responseSignature: res.signature });
  const messageInts: number[] = [];
  for (let i = 0; i < res.signatureLength; i++) {
    messageInts.push(res.signature[i]);
  }
  return new Uint8Array(messageInts);
};
