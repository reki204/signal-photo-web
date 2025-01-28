import { StepType } from "@/components/ui/HowToUse/types";

/**
 * サービスの使い方ステップデータ
 * 各ステップは画像、ステップ、タイトル、説明文、アイコンで構成
 */
export const steps: StepType[] = [
  {
    image: "/images/step1.jpg",
    step: "Step 1",
    title: "写真を投稿",
    text: "新規投稿ページで合言葉と一緒に画像を投稿しましょう。",
    icon: "📸",
  },
  {
    image: "/images/step2.jpg",
    step: "Step 2",
    title: "合言葉で検索",
    text: "検索ページで合言葉を検索して、画像を表示しましょう。",
    icon: "🔍",
  },
];
