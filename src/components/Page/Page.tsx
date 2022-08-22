import React from 'react';

import { Header } from '@src/components';
import { LoadingModal } from '../LoadingModal/LoadingModal';

interface PageProps {
  accountAddress: string | null;
  onLogin: () => any;
  onLogout: () => any;
  children: React.ReactNode;
}

export const Page = ({
  accountAddress,
  onLogin,
  onLogout,
  children,
}: PageProps) => {
  return (
    <div className="bg-emerald-900 pb-5">
      <Header
        accountAddress={accountAddress}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <LoadingModal />
      {children}
    </div>
  );
};
