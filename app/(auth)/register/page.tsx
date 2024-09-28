'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { Input, Label, TextField, Text } from 'react-aria-components';

const SubmitPage = () => {
  const Register = () => {
    console.log('登録完了');
    redirect('/login');
  };
  return (
    <div className="container w-full h-min-screen m-auto mt-16 p-8">
      <div className="md:w-[600px]  m-auto">
        <div className="flex flex-col space-y-12 md:p-8 text-gray-600">
          <h1 className="md:text-4xl text-xl font-extrabold tracking-widest text-center">
            新規登録
          </h1>
          <div className="grid gap-8">
            <div className="grid gap-1">
              <TextField type="email">
                <Label className="md:text-md text-sm tracking-widest font-semibold">
                  メールアドレス
                </Label>
                <Input
                  className="w-full md:text-lg text-md focus:outline-none p-2 border"
                  placeholder="abcdefghijklmn...@example.com"
                />
                <Text
                  slot="description"
                  className="md:text-xs text-[8px] tracking-tighter"
                ></Text>
              </TextField>
            </div>
            <div className="grid gap-1">
              <TextField type="password">
                <Label className="md:text-md text-sm tracking-widest font-semibold">
                  パスワード
                </Label>
                <Input
                  className="w-full md:text-lg text-md focus:outline-none p-2 border"
                  placeholder="**********"
                />
                <Text
                  slot="description"
                  className="md:text-xs text-[8px] tracking-tighter"
                >
                  ・パスワードは半角英数字(大文字・小文字含む)、記号の10文字以上を設定してください。
                </Text>
              </TextField>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="md:py-4 py-2 md:px-8 px-4 bg-gray-500 text-slate-50 rounded-lg hover:bg-gray-700 md:text-xl text-md md:w-[200px] w-[150px]">
              キャンセル
            </button>
            <button
              className="md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md md:w-[200px] w-[150px]"
              onClick={Register}
            >
              登録
            </button>
          </div>

          <p className="md:text-sm text-xs text-gray-600">
            登録済の場合は
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

export default SubmitPage;
