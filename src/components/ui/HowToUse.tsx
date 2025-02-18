"use client";

import SectionTitle from "@/components/ui/HowToUse/HowToUseTitle";
import { steps } from "@/components/ui/HowToUse/Step";
import StepCard from "@/components/ui/HowToUse/StepCard";

/**
 * サービスの使い方を説明するセクションコンポーネント
 * ステップバイステップで利用方法を視覚的に表示
 * @returns {JSX.Element} 使い方セクション
 */
const HowToUse = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle />
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.step} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
