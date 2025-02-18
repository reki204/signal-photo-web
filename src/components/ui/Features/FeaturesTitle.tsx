'use client';

import { motion } from 'motion/react';

/**
 * 特徴セクションのタイトルコンポーネント
 * アニメーション付きのヘッダーを表示
 * @returns {JSX.Element} セクションタイトル
 */
const FeaturesTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 mb-4">
        安心・安全な写真共有
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        最新のセキュリティ技術で、あなたの大切な写真を守ります
      </p>
    </motion.div>
  );
};

export default FeaturesTitle;
