import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import UploadHeader from '@/components/UploadHeader';
import UploadFooter from '@/components/UploadFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VIDEO IMAGE UPLOADER',
  description: 'App to store videos and photos in AWS S3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <UploadHeader />
      <div className="flex-grow">{children}</div>
      <UploadFooter />
    </div>
  );
}
