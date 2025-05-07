'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';

import { uploadAction, UploadActionState } from '../../actions/uploadActions';
import { MESSAGES } from '../../constants/messages';
import { UploadButton } from './UploadButton';

const INITIAL_STATE: UploadActionState = {
  success: false,
  validationErrors: {},
  message: null,
  apiError: null,
};

export const PhotoUploadForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState(uploadAction, INITIAL_STATE);

  useEffect(() => {
    if (!state) return;

    if (state.apiError) {
      setErrorMessage(state.apiError);
    } else if (state.message && state.validationErrors) {
      setErrorMessage(state.message);
    } else if (state.success) {
      setPreviewUrl(null);
      setErrorMessage(null);
      fileInputRef.current?.form?.reset();
      const timer = setTimeout(() => formAction(new FormData()), 3000);
      return () => clearTimeout(timer);
    }
  }, [state, formAction]);

  const handleContainerClick = () => fileInputRef.current?.click();

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);
    setErrorMessage(null);
  }, []);

  /**
   * preview中の画像をリセット
   */
  const resetForm = () => {
    setPreviewUrl(null);
    setErrorMessage(null);
    fileInputRef.current?.form?.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        写真をアップロード
      </h2>

      <form id="upload-form" action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            写真を選択
          </label>
          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
              previewUrl
                ? 'border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
            }`}
            onClick={handleContainerClick}
          >
            <input
              ref={fileInputRef}
              type="file"
              name="images"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {previewUrl ? (
              <div className="relative mx-auto w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={previewUrl}
                  alt="プレビュー"
                  fill
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
                <button
                  type="button"
                  onClick={resetForm}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  クリックして画像を選択
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  JPG, PNG, GIF (最大5MB)
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            合言葉
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200"
            placeholder="この写真の合言葉を入力..."
          />
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            この合言葉を知っている人だけが写真を見ることができます
          </p>
        </div>

        {(errorMessage || state.success) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${state.success ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'} p-3 rounded-lg text-sm`}
          >
            {state.success ? MESSAGES.UPLOAD_SUCCESS : errorMessage}
          </motion.div>
        )}

        <UploadButton pending={pending} />
      </form>
    </motion.div>
  );
};
