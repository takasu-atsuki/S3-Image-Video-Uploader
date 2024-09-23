import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface MenuBarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuBar = ({ setIsOpen }: MenuBarProps) => {
  return (
    <ul className="absolute top-20 bg-slate-200 rounded-md">
      <div className="divide-y divide-slate-50">
        <div className="px-4 py-2 hover:bg-gray-500 rouded-md">
          <Link href={'/upload'} onClick={() => setIsOpen(false)}>
            UPLOAD
          </Link>
        </div>
        <hr />
        <div className="px-4 py-2 hover:bg-gray-500 rounded-md">
          <Link href={'/download'} onClick={() => setIsOpen(false)}>
            DOWNLOAD
          </Link>
        </div>
      </div>
    </ul>
  );
};

export default MenuBar;
