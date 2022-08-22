import Image from 'next/image';
import React from 'react';

import { Button } from '../Button/Button';
import logo from '@src/stories/assets/logo.png';
import { PeraButton } from '../PeraButton/PeraButton';

interface HeaderProps {
  accountAddress: string | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ accountAddress, onLogin, onLogout }: HeaderProps) => {
  return (
    <div className="wrapper sticky top-0 bg-amber-800 m-auto">
      <div
        className="bg-stone-400 px-5 rounded-md pt-1 cursor-pointer"
        onClick={() => location.replace('/')}
      >
        <Image src={logo} width={32} height={32} />
        <h1 className="text-emerald-900 text-center">Algarden</h1>
      </div>
      <div>
        <a
          className="mr-10 text-stone-400"
          href="https://twitter.com/algardenalgo"
        >
          Twitter
        </a>
        <a className="mr-10 text-stone-400" href="https://t.me/al_garden">
          Telegram
        </a>
        <a
          className="mr-10 text-stone-400"
          href="https://algoxnft.com/shuffle/1001"
        >
          Shuffle
        </a>
        <a className="mr-10 text-stone-400" href="/whitepaper">
          Whitepaper
        </a>

        <PeraButton
          accountAddress={accountAddress}
          onLogin={onLogin}
          onLogout={onLogout}
        />
      </div>
    </div>
  );
};
