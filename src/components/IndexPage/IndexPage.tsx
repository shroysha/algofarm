import Head from 'next/head';
import { useAlgarden } from '@src/hooks';
import { Page, PlantGrid } from '@src/components';

// Create the PeraWalletConnect instance outside of the component

export const IndexPage = () => {
  const { accountAddress, plants } = useAlgarden();

  return (
    <>
      {accountAddress == null ? (
        <div className="bg-stone-400 m-10 p-5">
          <h1>Please connect your wallet to view your plants</h1>
        </div>
      ) : plants.length == 0 ? (
        <div className="bg-stone-400 m-10 p-5">
          <h1>You have no plants!</h1>
        </div>
      ) : (
        <PlantGrid plants={plants} />
      )}
    </>
  );
};

export default IndexPage;
