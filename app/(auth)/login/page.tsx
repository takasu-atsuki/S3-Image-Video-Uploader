import ClientButton from '@/components/ClientButton';
import ProviderLogin from '@/components/ProviderLogin';
import { getProviders } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FaLine } from 'react-icons/fa';

const LoginPage = async () => {
  const NormalOnClick = async () => {
    'use server';
    console.log('通常ログイン');
  };

  const providers = await getProviders();
  console.log(providers);
  return (
    <div className="container w-full h-min-screen m-auto mt-16 p-8">
      <div className="md:w-[600px]  m-auto">
        <div className="flex flex-col space-y-8 md:p-8 text-gray-600">
          <h1 className="md:text-4xl text-xl font-extrabold tracking-widest text-center">
            ログイン
          </h1>
          <div className="grid gap-8">
            <div className="grid gap-1">
              <label
                htmlFor="email"
                className="md:text-md text-sm tracking-widest font-semibold"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                className="w-full md:text-lg text-md focus:outline-none p-2 border"
                placeholder="abcdefghijklmn...@example.com"
              />
              <label
                htmlFor="email"
                slot="description"
                className="md:text-xs text-[8px] tracking-tighter"
              ></label>
            </div>
            <div className="grid gap-1">
              <label
                id="password"
                className="md:text-md text-sm tracking-widest font-semibold"
              >
                パスワード
              </label>
              <input
                type="password"
                id="password"
                className="w-full md:text-lg text-md focus:outline-none p-2 border"
                placeholder="**********"
              />
              <label
                htmlFor="password"
                slot="description"
                className="md:text-xs text-[8px] tracking-tighter"
              >
                ・パスワードは半角英数字(大文字・小文字含む)、記号の10文字以上を設定してください。
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="md:py-4 py-2 md:px-8 px-4 bg-gray-500 text-slate-50 rounded-lg hover:bg-gray-700 md:text-xl text-md md:w-[200px] w-[150px]">
              キャンセル
            </button>
            <ClientButton onClick={NormalOnClick}>ログイン</ClientButton>
          </div>

          <hr />

          {providers &&
            Object.keys(providers).length > 0 &&
            Object.keys(providers).map((key) => {
              return (
                <div key={providers[key].id}>
                  <ProviderLogin provider={providers[key]} />
                </div>
              );
            })}

          <p className="md:text-sm text-xs text-gray-600">
            登録がまだの場合は
            <Link
              href={'/submit'}
              className="underline md:text-lg text-md tracking-widest"
            >
              <span className=" hover:text-red-500 font-semibold underline">
                こちら
              </span>
            </Link>
            をクリック
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
