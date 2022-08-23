import Image from 'next/image';
import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from './icon.png';
import { PeraButton } from '../PeraButton/PeraButton';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps {
  accountAddress: string | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ accountAddress, onLogin, onLogout }: HeaderProps) => {
  return (
    <div className="wrapper sticky top-0 bg-amber-800 p-2">
      <div
        className="whitespace-nowrap	bg-stone-400 px-2 py-2 rounded-md  cursor-pointer flex items-center	justify-center"
        onClick={() => location.replace('/')}
      >
        <Image className="object-contain" src={logo} width={32} height={32} />
        <h1 className="text-emerald-900 text-center object-contain text-sm">
          Algarden
        </h1>
      </div>
      <div className="flex items-center	justify-center space-x-2">
        <PeraButton
          accountAddress={accountAddress}
          onLogin={onLogin}
          onLogout={onLogout}
        />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-2 py-2 bg-stone-400 text-sm font-medium text-gray-700 hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-400 focus:ring-indigo-500">
              <ChevronDownIcon className=" h-4 w-4" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/whitepaper"
                      className={classNames(
                        active ? 'bg-stone-500 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm bg-stone-400'
                      )}
                    >
                      Whitepaper
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://algoxnft.com/shuffle/1001"
                      className={classNames(
                        active ? 'bg-stone-500 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm bg-stone-400'
                      )}
                    >
                      Shuffle
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://twitter.com/algardenalgo"
                      className={classNames(
                        active ? 'bg-stone-500 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm bg-stone-400'
                      )}
                    >
                      Twitter
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="https://t.me/al_garden">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? 'bg-stone-500 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm bg-stone-400'
                        )}
                      >
                        Telegram
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
