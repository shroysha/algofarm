import { responseToUint } from '../util';

export const fetchSignature = async () => {
  const response = await fetch('api/harvest', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  console.log({ responseSignature: res.signature });

  return {
    signature: responseToUint(res.signature),
    message: responseToUint(res.message),
  };
};

export const fetchSigners = async () => {
  const response = await fetch('api/set-signer', {
    method: 'POST',
  });
  const res = (await response.json()) as any;

  return {
    publicKey: responseToUint(res.publicKey),
  };
};
