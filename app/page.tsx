import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/ui/Hero";
import HowToUse from "./components/ui/HowToUse";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <HowToUse />
      </main>
      <Footer />
    </>
  );
}
