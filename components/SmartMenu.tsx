'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { RxCrossCircled } from 'react-icons/rx';

const SmartMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const CloseSmartMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mr-4 md:hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <CiMenuKebab className="text-xl text-gray-600" />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-slate-50">
          <div className="flex flex-col space-y-4">
            <div
              className="text-red-400 flex justify-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RxCrossCircled className="w-8 h-8 mt-2 mr-2 " />
            </div>
            <div className="grid divide-y-8 devide border-y-8">
              <div className="p-4 text-center" onClick={CloseSmartMenu}>
                <Link href={'/upload'} className="w-full">
                  UPLOAD
                </Link>
              </div>
              <div className="p-4 text-center" onClick={CloseSmartMenu}>
                <Link href={'/download'} className="w-full">
                  DownLoad
                </Link>
              </div>
              <div className="p-4 text-center" onClick={CloseSmartMenu}>
                <Link href={'/settings'} className="w-full">
                  ユーザー設定
                </Link>
              </div>
              <div className="p-4 text-center" onClick={CloseSmartMenu}>
                <Link href={'/logout'} className="w-full">
                  ログアウト
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartMenu;
