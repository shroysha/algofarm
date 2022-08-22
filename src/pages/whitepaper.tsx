// Create the PeraWalletConnect instance outside of the component

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-stone-400 m-10 p-5">
        <h1>Welcome to Algarden!</h1>
        <br />
        <br />
        <p>
          We love plants and we love Algorand! <br />
          <br />
          We have created an updatable game that once you water your plants 2
          times and wait a day in between, you can then interact with our custom
          Algorand smart contract to receive the next stage in the plant's
          growing cycle!
        </p>
        <br />

        <p>
          Total Supply: <br /> Watermelon Seeds: 2500
        </p>
        <br />
        <h1>Roadmap</h1>
        <br />
        <br />
        <ol>
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
