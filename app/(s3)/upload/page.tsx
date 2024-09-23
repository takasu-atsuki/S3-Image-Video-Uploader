import Image from 'next/image';
import { FaRegFileImage } from 'react-icons/fa';
import { FaFileVideo } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center md:p-12 p-8 md:space-y-16 space-y-8 text-gray-600 mx-auto">
      <h1 className="md:text-4xl text-xl font-extrabold">
        画像・動画 アップロード
      </h1>
      <form className="w-full flex flex-col space-y-8 items-end">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
              <div className="flex space-x-4 items-center">
                <FaRegFileImage className="md:text-6xl text-2xl" />
                <span className="font-semibold md:text-xl text-md">or</span>
                <FaFileVideo className="md:text-6xl text-2xl" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-2 text-sm text-gray-600">
                  <span className="font-semibold">
                    フォルダからファイルを選択する
                  </span>
                </p>
                <p className="mb-2 md:text-xl text-md text-gray-600">or</p>
                <p className="mb-2 text-sm text-gray-600">
                  <span className="font-semibold">
                    ドラッグすることでファイルを選択する
                  </span>
                </p>
              </div>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <button
          type="submit"
          className="md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md md:w-[200px] w-[150px]"
        >
          保存
        </button>
      </form>
    </main>
  );
}
