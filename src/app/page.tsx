import NexusEffects from "@/components/NexusEffects";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
	return (
		<main id="top" className="relative ">
			<NexusEffects />

			<div className="relative !z-[10000]">
				<Nav />
				<MobileMenu />
				<ScrollReveal />
				<Hero />
				<Stats />
				<Features />
				<Pricing />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
