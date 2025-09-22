import NeuralBackground from "../components/NeuralBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";

export default function Page() {
  return (
    <>
      <NeuralBackground />
      <Header />
      <ClientEffects />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
