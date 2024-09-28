import UserAuthForm from '@/components/UserAuthForm';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="container w-full h-min-screen m-auto mt-16 p-8">
      <div className="md:w-[600px]  m-auto">
        <div className="flex flex-col space-y-8 md:p-8 text-gray-600">
          <div className="grid gap-4">
            <h1 className="md:text-4xl text-xl font-extrabold tracking-widest text-center">
              ログイン
            </h1>
            <UserAuthForm>ログイン</UserAuthForm>
            <p className="md:text-sm text-xs text-gray-600">
              登録がまだの場合は
              <Link
                href={'/register'}
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
    </div>
  );
};

export default LoginPage;
