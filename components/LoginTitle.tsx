import React from 'react';

interface LoginTitleProps {
  title: string;
}

const LoginTitle = ({ title }: LoginTitleProps) => {
  return (
    <h1 className="md:text-4xl text-xl font-extrabold tracking-widest text-center">
      {title}
    </h1>
  );
};

export default LoginTitle;
