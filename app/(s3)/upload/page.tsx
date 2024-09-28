import VideoImageUploadForm from '@/components/VideoImageUploadForm';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center md:p-12 p-8 md:space-y-16 space-y-8 text-gray-600 mx-auto">
      <h1 className="md:text-4xl text-xl font-extrabold">
        画像・動画 アップロード
      </h1>
      <VideoImageUploadForm />
    </main>
  );
}
