export const responseToUint = (responseObject: any) => {
  const response: number[] = [];
  let counter = 0;
  while (true) {
    if (responseObject[counter] == null) {
      return new Uint8Array(response);
    } else {
      response.push(responseObject[counter]);
    }
    counter++;
  }
};

export const getPublicKey = () => {
  if (!process.env.NEXT_PUBLIC_KEY) {
    throw new Error('no public key');
  }
  return new Uint8Array(JSON.parse(process.env.NEXT_PUBLIC_KEY));
};

export const getPrivateKey = () => {
  if (!process.env.PRIVATE_KEY) {
    throw new Error('no private key');
  }
  return new Uint8Array(JSON.parse(process.env.PRIVATE_KEY));
};
