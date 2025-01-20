import Image from "next/image";
import Link from "next/link";

const Hero = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <div className="relative h-[680px] w-full flex justify-center items-center -z-10">
      <Image
        src="/images/home_bg.jpg"
        alt="Background"
        fill
        className="absolute object-cover"
        priority
      />

      {/* 背景の暗いオーバーレイ */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-8 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Signal Photo
        </h1>
        <p className="text-lg text-white text-center mb-8 leading-relaxed">
          Signal Photoは無料の写真共有サービスです。
          <br />
          合言葉を使用して秘密の写真を投稿しましょう。
        </p>
        <ul className="flex justify-center space-x-4">
          {isAuthenticated ? (
            <li>
              <Link
                href="/photos/new"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                新規投稿
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-white font-medium hover:text-gray-300 transition-all duration-300"
                >
                  ログイン
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  新規登録
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
