import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
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
      <Footer />
    </>
  );
}
