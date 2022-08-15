import { responseToUint } from '../util';

export const fetchSignature = async () => {
  const response = await fetch('api/harvest', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  console.log({ responseSignature: res.signature });

  return responseToUint(res.signature);
};

export const fetchSigners = async () => {
  const response = await fetch('api/set-signer', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  //console.log({ responseSignature: res.signature });

  return {
    publicKey: responseToUint(res.publicKey),
    privateKey: responseToUint(res.privateKey),
  };
};
