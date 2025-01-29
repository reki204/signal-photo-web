import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/photos", label: "ホーム" },
  { href: "/photos/new", label: "新規投稿" },
  { href: "/register", label: "新規登録" },
  { href: "/login", label: "ログイン" },
];

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white/80 dark:bg-gray-900 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Signal Photo
        </Link>
        <nav className="hidden md:flex space-x-6 text-lg">
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-500 dark:text-gray-200 transition"
            >
              {label}
            </Link>
          ))}
          <Link href="/profile">
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
