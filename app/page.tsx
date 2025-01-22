import Header from "./components/layout/Header";
import { ThemeToggle } from "./components/theme-toggle";
import Hero from "./components/ui/Hero";
import HowToUse from "./components/ui/HowToUse";

export default function Home() {
  const isAuthenticated = false;
  return (
    <>
      <Header />
      <main>
        <Hero isAuthenticated={isAuthenticated} />
        <HowToUse />
      </main>
      <ThemeToggle />
    </>
  );
}
