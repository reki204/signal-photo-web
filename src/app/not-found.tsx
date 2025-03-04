import Link from 'next/link';

import Motion from '@/components/common/Motion';

/**
 * 404 Not Foundページコンポーネント
 * アニメーション付きの404ページを表示
 * @returns {JSX.Element} 404ページ
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4">
        <Motion>
          <h1 className="text-8xl font-bold text-gray-500 dark:text-gray-300">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            お探しのページはまだ作成されていない可能性があります
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            ホームに戻る
          </Link>
        </Motion>
      </div>
    </div>
  );
};

export default NotFound;
