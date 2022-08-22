import Head from 'next/head';
import { useAlgarden } from '@src/hooks';
import { Page, PlantGrid } from '@src/components';

// Create the PeraWalletConnect instance outside of the component

export const IndexPage = () => {
  const { plants } = useAlgarden();

  return <PlantGrid plants={plants} />;
};

export default IndexPage;
