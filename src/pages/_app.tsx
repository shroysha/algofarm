import '../../styles/globals.css';
import '@src/components/Button/button.css';
import '@src/components/Header/header.css';
import '@src/components/Page/page.css';

import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AlgardenProvider, useAlgarden } from '@src/hooks';
import { Page } from '@src/components';
import Head from 'next/head';
import { Html } from 'next/document';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function Layout({ children }: { children: ReactNode }) {
  const {
    accountAddress,
    handleConnectWalletClick,
    handleDisconnectWalletClick,
  } = useAlgarden();
  return (
    <>
      <Head>
        <meta name="name" content="Algarden" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Page
        accountAddress={accountAddress}
        onLogin={handleConnectWalletClick}
        onLogout={handleDisconnectWalletClick}
      >
        {children}
      </Page>
    </>
  );
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  return (
    <AlgardenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlgardenProvider>
  );
}
