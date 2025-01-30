/**
 * ステップカードのデータ構造を定義
 */
export interface StepType {
  /** ステップを説明する画像のパス */
  image: string;
  /** ステップ番号 */
  step: string;
  /** ステップのタイトル */
  title: string;
  /** ステップの説明文 */
  text: string;
  /** ステップを表すアイコン */
  icon: string;
};
