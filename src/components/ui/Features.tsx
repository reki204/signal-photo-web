'use client';

import FeatureCard from '@/components/ui/Features/FeatureCard';
import { featuresContents } from '@/components/ui/Features/FeaturesContents';
import FeaturesTitle from '@/components/ui/Features/FeaturesTitle';

/**
 * サービスの主要な特徴を表示するセクションコンポーネント
 * アニメーション付きのグリッドレイアウトで特徴カードを表示します
 * @returns {JSX.Element} 特徴セクション
 */
const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <FeaturesTitle />
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuresContents.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
