import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import MainMenu from './MainMenu';
import SmartMenu from './SmartMenu';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Image from 'next/image';

const UploadHeader = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-400 text-gray-800 flex justify-between items-center">
      <div className="flex justify-between px-4 py-1 items-center">
        <div className="md:ml-4">
          <div className="md:border-4 border-0 flex p-1 space-x-1">
            <div className="flex flex-col justify-center items-center">
              <h3 className="md:text-xs text-[8px]">VIDEO</h3>
              <h2 className="md:text-xs text-[8px]">・</h2>
              <h3 className="md:text-xs text-[8px]">IMAGE</h3>
            </div>
            <h3 className="md:text-xs tracking-tighter [writing-mode:vertical-rl] md:border-l-4 text-[8px] border-l-2">
              UPLOADER
            </h3>
          </div>
        </div>
      </div>
      <SmartMenu />
      <div className="hidden md:flex items-center justify-around space-x-8 mr-4 relative">
        <MainMenu />
        <div className="bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center hover:bg-slate-200">
          {session && session.user ? (
            <Image
              src={session?.user.image}
              width={100}
              height={100}
              alt="ユーザの写真"
              className="w-full h-full rounded-full"
            />
          ) : (
            <FaRegUser className="text-gray-800 w-8 h-8" />
          )}
        </div>
      </div>
    </header>
  );
};

export default UploadHeader;
