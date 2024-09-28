'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import type { ReactNode } from 'react';
import { FaGithub, FaLine } from 'react-icons/fa';
import { parseWithZod } from '@conform-to/zod';
import { AuthSchema } from '@/app/lib/schema/authSchema';
import { useFormState } from 'react-dom';
import { useForm } from '@conform-to/react';
import { login } from './server/login/action';

interface ValidateFunctionType {
  formData: FormData;
}

interface UserAuthFormProps {
  children: ReactNode;
}

const UserAuthForm = ({ children }: UserAuthFormProps) => {
  const [lastResult, action] = useFormState(login, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }: ValidateFunctionType) {
      return parseWithZod(formData, { schema: AuthSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const LineLogin = async () => {
    signIn('line');
  };

  const GithubLogin = async () => {
    signIn('github');
  };

  return (
    <form
      className="grid gap-4"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
    >
      <div className="grid gap-8">
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="md:text-md text-sm tracking-widest font-semibold"
          >
            メールアドレス
          </label>
          <input
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            type="email"
            id="email"
            className="w-full md:text-lg text-md focus:outline-none p-2 border"
            placeholder="abcdefghijklmn...@example.com"
          />
          {fields.email.errors?.map((error) => (
            <div
              key={error}
              className="md:text-xs text-[8px] tracking-tighter text-red-500"
            >
              ・{fields.email.errors}
            </div>
          ))}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="password"
            className="md:text-md text-sm tracking-widest font-semibold"
          >
            パスワード
          </label>
          <input
            key={fields.password.key}
            name={fields.password.name}
            defaultValue={fields.password.initialValue}
            type="password"
            id="password"
            className="w-full md:text-lg text-md focus:outline-none p-2 border"
            placeholder="**********"
          />
          {fields.password.errors?.map((error) => (
            <div
              key={error}
              className="md:text-xs text-[8px] tracking-tighter text-red-500"
            >
              ・{error}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md w-full"
        >
          {children}
        </button>
      </div>
      <hr />
      <button
        type="button"
        onClick={LineLogin}
        className="w-full bg-slate-200 hover:bg-slate-400 rounded-lg p-4 flex items-center space-x-4 justify-center"
      >
        <FaLine className="text-green-500 md:w-6 md:h-6 w-4 h-4 mr-4" />
        LINE
      </button>
      <button
        type="button"
        onClick={GithubLogin}
        className="w-full bg-slate-200 hover:bg-slate-400 rounded-lg p-4 flex items-center space-x-4 justify-center"
      >
        <FaGithub className="text-slate-700 md:w-6 md:h-6 w-4 h-4 mr-4" />
        GitHub
      </button>
    </form>
  );
};

export default UserAuthForm;
