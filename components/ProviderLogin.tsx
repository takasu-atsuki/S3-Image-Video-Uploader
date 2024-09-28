import React from 'react';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

interface ProviderLoginProps {
  provider: Provider;
}

const ProviderLogin = ({ provider }: ProviderLoginProps) => {
  return (
    <div className="w-full bg-slate-200 hover:bg-slate-400 rounded-lg p-4">
      <div>プロバイダー</div>
    </div>
  );
};

export default ProviderLogin;
