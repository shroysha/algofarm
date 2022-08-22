import type { NextPage } from 'next';
import { AlgardenProvider } from '@src/hooks';
import IndexPage from '@src/components/IndexPage/IndexPage';

// Create the PeraWalletConnect instance outside of the component

const Home: NextPage = () => {
  return (
    <>
      <IndexPage />
    </>
  );
};

export default Home;
