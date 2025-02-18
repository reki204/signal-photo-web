"use client";

import { motion } from "motion/react";

import { FeatureType } from "@/components/ui/Features/types";

type Props = FeatureType & { index: number };

/**
 * 個々の特徴を表示するカードコンポーネント
 * ホバーエフェクトとアニメーションを含む
 * @param {Props} props - カードのプロパティ
 * @param {string} props.icon - 特徴を表すアイコン
 * @param {string} props.title - 特徴のタイトル
 * @param {string} props.description - 特徴の詳細説明
 * @param {number} props.index - アニメーションの順序を制御するインデックス
 * @returns {JSX.Element} 特徴カード
 */
const FeatureCard = ({ icon, title, description, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
