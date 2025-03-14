import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
      <Image
        src="/images/home_bg.webp"
        alt="Background"
        fill
        className="absolute object-cover"
        priority
      />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-6 py-16">
        <h1 className="text-6xl md:text-7xl font-black text-white text-center mb-8 tracking-tight">
          Signal Photo
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 text-center mb-12 leading-relaxed max-w-2xl">
          合言葉で繋がる、新しい写真共有の形。
          <span className="block mt-2 text-gray-300">あなたの大切な瞬間を、大切な人と。</span>
        </p>

        <Link
          href="/photos"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          <span className="relative z-10">はじめよう</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* デコレーション要素 - サイズを調整 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-radial from-indigo-500/10 to-transparent opacity-50 blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
