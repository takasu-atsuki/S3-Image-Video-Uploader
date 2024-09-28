'use client';
import { FaRegFileImage } from 'react-icons/fa';
import { FaFileVideo } from 'react-icons/fa';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { upload } from './server/upload/action';
import { useForm } from '@conform-to/react';
import { videoImageSchema } from '@/app/lib/schema/videoImageSchema';

interface uploadActionType {
  formData: FormData;
}

const VideoImageUploadForm = () => {
  const [lastResult, action] = useFormState(upload, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }: uploadActionType) {
      return parseWithZod(formData, { schema: videoImageSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });
  return (
    <form
      className="w-full flex flex-col space-y-8 items-end"
      id={form.id}
      action={action}
      onSubmit={form.onSubmit}
      noValidate
    >
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
              <div className="md:text-xs text-[8px] tracking-tighter text-red-500">
                {fields.file.errors}
              </div>
            </div>
          </div>
          <input
            key={fields.file.key}
            id="dropzone-file"
            name={fields.file.name}
            type="file"
            className="hidden"
            multiple
          />
        </label>
      </div>
      <button
        type="submit"
        className="md:py-4 py-2 md:px-8 px-4 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-700 md:text-xl text-md md:w-[200px] w-[150px]"
      >
        保存
      </button>
    </form>
  );
};

export default VideoImageUploadForm;
