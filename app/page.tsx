import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Features from "./components/ui/Features";
import Hero from "./components/ui/Hero";
import HowToUse from "./components/ui/HowToUse";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <HowToUse />
        <Features />
      </main>
      <Footer />
    </>
  );
}
