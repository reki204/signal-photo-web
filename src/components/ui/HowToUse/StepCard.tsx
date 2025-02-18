'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { StepType } from '@/components/ui/HowToUse/types';

type Props = StepType & { index: number };

/**
 * 各ステップを表示するカードコンポーネント
 * 画像、タイトル、説明文を含むインタラクティブなカード
 * @param {Props} props - カードのプロパティ
 * @param {string} props.image - ステップを説明する画像のパス
 * @param {string} props.step - ステップ番号
 * @param {string} props.title - ステップのタイトル
 * @param {string} props.text - ステップの説明文
 * @param {string} props.icon - ステップを表すアイコン
 * @param {number} props.index - アニメーションの順序を制御するインデックス
 * @returns {JSX.Element} ステップカード
 */
const StepCard = ({ image, step, title, text, icon, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-full px-4 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 shadow-lg">
          {step}
        </div>

        {/* 画像 */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            width={640}
            height={480}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* 説明エリア */}
        <div className="p-8">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
