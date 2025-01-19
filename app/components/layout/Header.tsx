import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Signal Photo
        </Link>
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/photos" className="hover:text-gray-500 transition">
            ホーム
          </Link>
          <Link href="/photos/new" className="hover:text-gray-500 transition">
            新規投稿
          </Link>
          <Link href="/register" className="hover:text-gray-500 transition">
            新規登録
          </Link>
          <Link href="/login" className="hover:text-gray-500 transition">
            ログイン
          </Link>

          <Link href="/profile" className="">
            <Image
              src="/images/default_icon.png"
              alt="Profile Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
