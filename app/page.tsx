import Hero from "./components/ui/Hero";
import HowToUse from "./components/ui/HowToUse";

export default function Home() {
  const isAuthenticated = false;
  return (
    <>
      <main>
        <Hero isAuthenticated={isAuthenticated} />
        <HowToUse />
      </main>
    </>
  );
}
