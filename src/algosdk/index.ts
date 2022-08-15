import algosdk from 'algosdk';

export const makeSdk = async () => {
  // Setting up algosdk client
  const algod = new algosdk.Algodv2(
    '',
    'https://node.testnet.algoexplorerapi.io/',
    443
  );
  const suggestedParams = await algod.getTransactionParams().do();

  return { algod, suggestedParams };
};
