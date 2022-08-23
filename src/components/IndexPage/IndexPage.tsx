import Head from 'next/head';
import { useAlgarden } from '@src/hooks';
import { Page, PlantGrid } from '@src/components';

// Create the PeraWalletConnect instance outside of the component

export const HowToPlay = () => {
  return (
    <>
      <h1 className="text-black">How to Play</h1>
      <br />
      <p className="p-3 text-black">
        Collect plants to start growing! You can water each plant once daily
        using this site. Once you have watered your plant twice, come back the
        next day and grow your plant to the next stage!
      </p>
    </>
  );
};

export const IndexPage = () => {
  const { accountAddress, plants } = useAlgarden();

  return (
    <>
      {accountAddress == null ? (
        <div className="bg-stone-400 m-10 p-5">
          <h1 className="text-black">
            Connect your wallet to view your plants!
          </h1>
          <br />
          <br />

          <HowToPlay />
        </div>
      ) : plants.length == 0 ? (
        <div className="bg-stone-400 m-10 p-5">
          <h1 className="text-black">You have no plants!</h1>
          <br />
          <br />

          <HowToPlay />
        </div>
      ) : (
        <PlantGrid plants={plants} />
      )}
    </>
  );
};

export default IndexPage;
