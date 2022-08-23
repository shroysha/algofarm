// Create the PeraWalletConnect instance outside of the component

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-stone-400 m-10 p-5">
        <h1 className="text-black">Welcome to Algarden!</h1>
        <br />
        <p className="p-3 text-black">
          We love plants and we love Algorand! <br />
          <br />
          We've created an updatable game that once you water your plants twice
          and wait a day, you can then interact with our custom Algorand smart
          contract to receive the next stage in the plant's growing cycle!
        </p>
        <br />
        <h1 className="text-black">Total Supply</h1>

        <p className="p-3 text-black">Watermelon Seeds: 2500</p>
        <br />
        <h1>Roadmap</h1>
        <br />
        <ol className="p-3 text-black">
          <li>Harvesting Masteries</li>
          <li>Coin Launch</li>
          <li>Delivery Quests</li>
          <li>Fully Built Out Farm</li>
        </ol>
      </div>
    </>
  );
};

export default Home;
