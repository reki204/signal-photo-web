'use client';

import { motion } from 'motion/react';

/**
 * 使い方セクションのタイトルコンポーネント
 * アニメーション付きのヘッダーを表示
 * @returns {JSX.Element} セクションタイトル
 */
const HowToUseTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
        使い方はとってもシンプル
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        たった2ステップで、大切な思い出を共有できます
      </p>
    </motion.div>
  );
};

export default HowToUseTitle;
