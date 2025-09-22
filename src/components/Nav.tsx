import React from 'react';

export default function Nav() {
	return (
		<nav className="fixed top-0 w-full z-[10000] bg-[rgba(15,15,35,0.9)] backdrop-blur-[20px] border-b border-[rgba(229,231,235,0.2)] transition-all duration-300">
			<div className="nav-container flex flex-row items-center gap-0 max-w-[1400px] mx-auto px-8 py-4">
				<a href="#top" className="logo">
					NexusFlow
				</a>

				<ul className="cursor-pointer nav-links hidden md:flex list-none gap-10 flex-1 justify-center">
					<li><a href="#features" className="uppercase text-base tracking-wider text-gray-400 hover:text-[#00ffff] transition">Features</a></li>
					<li><a href="#pricing" className="uppercase text-base tracking-wider text-gray-400 hover:text-[#00ffff] transition">Pricing</a></li>
					<li><a href="#stats" className="uppercase text-base tracking-wider text-gray-400 hover:text-[#00ffff] transition">Stats</a></li>
					<li><a href="#contact" className="uppercase text-base tracking-wider text-gray-400 hover:text-[#00ffff] transition">Contact</a></li>
				</ul>

				<div className="nav-bottom flex-none hidden md:block">
					<a href="#" className="cyber-button py-3 px-6 text-sm bg-gradient-to-tr from-[#00ffff] to-purple-700 text-[#0f051a] font-extrabold uppercase tracking-[2px] [clip-path:polygon(15px_0%,_100%_0%,_calc(100%_-_15px)_100%,_0%_100%)]">Access Terminal</a>
				</div>
				
				<button className="mobile-menu-button block md:hidden ml-4" id="mobileMenuBtn">
					<div className="hamburger relative w-[25px] h-[20px] m-auto">
						<span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-0" />
						<span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-[9px]" />
						<span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-[18px]" />
					</div>
				</button>
			</div>
		</nav>
	);
}
