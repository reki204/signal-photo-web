import type { FC } from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-row space-x-1">
      <button
        onClick={() => {
          setTheme("light");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        dark
      </button>
      <button
        onClick={() => {
          setTheme("system");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        system
      </button>
    </div>
  );
};
