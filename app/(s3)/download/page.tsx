import Image from 'next/image';
import React from 'react';

const DownLoadPage = async () => {
  return (
    <main className="text-gray-600 container flex flex-col md:p-12 p-8 mx-auto items-center md:space-y-16 space-y-8">
      <h1 className="md:text-4xl text-xl font-extrabold">
        画像・動画 ダウンロード
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/tori.jpg"
            alt="NEXTの写真"
            width={100}
            height={100}
            className={'md:hidden'}
          />
          <Image
            src="/tori.jpg"
            alt="NEXTの写真"
            width={400}
            height={400}
            className={'hidden md:block'}
          />
        </div>
      </div>
    </main>
  );
};

export default DownLoadPage;
