# Signal Photo Web

Signal Photo Webは、画像を安全にアップロードし、検索・共有するためのWebアプリケーションです。Next.js (App Router) を使用して構築されています。

## 主な機能

- **画像アップロード**: ドラッグ＆ドロップ対応のインターフェースから簡単に画像をアップロードできます。
- **画像検索**: アップロードした画像を検索できます。
- **テーマ切り替え**: ライトモードとダークモードを切り替えることができます。

## 技術スタack

- **フレームワーク**: [Next.js](https://nextjs.org/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **API**: [Hono](https://hono.dev/)
- **UI**:
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
  - [Lucide React](https://lucide.dev/guide/packages/lucide-react) (アイコン)
  - [Framer Motion](https://www.framer.com/motion/) (アニメーション)
- **状態管理**: [Zustand](https://zustand-demo.pmnd.rs/)
- **ファイルアップロード**: [React-Uploady](https://react-uploady.org/)
- **環境変数**: [T3 Env](https://env.t3.gg/)
- **エラー監視**: [Sentry](https://sentry.io/)
- **リンター/フォーマッター**:
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## ローカル開発環境のセットアップ

1.  **リポジトリをクローンします**
    ```bash
    git clone https://github.com/your-username/signal-photo-web.git
    cd signal-photo-web
    ```

2.  **依存関係をインストールします**
    ```bash
    npm install
    ```

3.  **環境変数を設定します**
    `.env.local` ファイルを作成し、必要な環境変数を設定してください。設定すべき項目については `src/env.ts` を参照してください。

4.  **開発サーバーを起動します**
    ```bash
    npm run dev
    ```
    ブラウザで `http://localhost:3000` を開いてください。

## 利用可能なスクリプト

- `npm run dev`: 開発モードでアプリケーションを起動します。
- `npm run build`: 本番用にアプリケーションをビルドします。
- `npm run start`: ビルドしたアプリケーションを本番モードで起動します。
- `npm run lint`: ESLintとPrettierでコードの静的解析を実行します。
- `npm run fix`: ESLintとPrettierでコードを自動修正します。

## デプロイ

このプロジェクトは、`@cloudflare/next-on-pages` を使用しており、Cloudflare Pagesへのデプロイが想定されています。