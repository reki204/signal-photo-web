import { FeatureType } from "@/components/ui/Features/types";

/**
 * サービスの特徴データ
 * 各特徴はアイコン、タイトル、説明文で構成
 */
export const featuresContents: FeatureType[] = [
  {
    icon: "🔒",
    title: "AES暗号化",
    description:
      "業界標準のAES暗号化技術により、アップロードされた写真は安全に保管されます。第三者による不正アクセスから大切なデータを守ります。",
  },
  {
    icon: "🛡️",
    title: "スクレイピング防止",
    description:
      "特殊な画像配信システムにより、自動収集ボットからの一括ダウンロードを防止。あなたの写真は意図した相手にだけ届きます。",
  },
  {
    icon: "🎯",
    title: "合言葉アクセス",
    description:
      "URLではなく合言葉での共有により、検索エンジンからのアクセスを完全にブロック。プライバシーを確実に保護します。",
  },
  {
    icon: "⚡",
    title: "高速表示",
    description:
      "最新のCDN技術により、世界中どこからでも高速アクセスが可能。大切な瞬間をストレスなく共有できます。",
  },
  {
    icon: "📱",
    title: "完全レスポンシブ",
    description:
      "あらゆるデバイスで最適な表示を実現。スマートフォンでもPCでも、美しく写真を閲覧できます。",
  },
  {
    icon: "🌙",
    title: "ダークモード",
    description:
      "目に優しいダークモード搭載。夜間の利用でも快適に写真の共有・閲覧が可能です。",
  },
];
