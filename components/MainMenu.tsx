'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuMenuSquare } from 'react-icons/lu';
import MenuBar from './MenuBar';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-slate-50 rounded-full w-16 h-16 flex items-center flex-col justify-center hover:bg-slate-200">
      <div>
        <LuMenuSquare
          className="text-gray-800 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <MenuBar setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MainMenu;
