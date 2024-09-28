'use client';
import { signIn } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { FaGithub, FaLine } from 'react-icons/fa';

interface UserAuthFormProps {
  children: ReactNode;
}

const UserAuthForm = ({ children }: UserAuthFormProps) => {
  const NormalLogin = async () => {
    console.log('ログイン');
  };

  const LineLogin = async () => {
    signIn('line');
  };

  const GithubLogin = async () => {
    signIn('github');
  };

  return (
    <>
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
        <button
          onClick={NormalLogin}
          className="md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md md:w-[200px] w-[150px]"
        >
          {children}
        </button>
      </div>
      <hr />
      <button
        onClick={LineLogin}
        className="w-full bg-slate-200 hover:bg-slate-400 rounded-lg p-4 flex items-center space-x-4"
      >
        <FaLine className="text-green-500 md:w-6 md:h-6 w-4 h-4 mr-4" />
        LINE
      </button>
      <button
        onClick={GithubLogin}
        className="w-full bg-slate-200 hover:bg-slate-400 rounded-lg p-4 flex items-center space-x-4"
      >
        <FaGithub className="text-slate-700 md:w-6 md:h-6 w-4 h-4 mr-4" />
        GitHub
      </button>
    </>
  );
};

export default UserAuthForm;
