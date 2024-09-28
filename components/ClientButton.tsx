'use client';
import React, { ReactNode } from 'react';

interface ClientButtonProps {
  children: ReactNode;
  onClick: () => {};
  className?: string;
}

const ClientButton = ({ children, onClick, className }: ClientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        'md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md md:w-[200px] w-[150px]' +
        className
      }
    >
      {children}
    </button>
  );
};

export default ClientButton;
