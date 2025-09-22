export default function PricingSection(){
  const Plan = ({name,price,period,features,featured}:{name:string;price:string;period:string;features:string[];featured?:boolean}) => (
    <div className={(featured? 'scale-[1.05] bg-[rgba(0,255,255,0.05)] border-[#00ffff] shadow-[0_0_50px_rgba(0,255,255,0.3)] ' : '') + 'pricing-card bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 text-center relative transition-all duration-300 backdrop-blur-[10px] clip-path-[polygon(30px_0%,_100%_0%,_100%_calc(100%_-_30px),_calc(100%_-_30px)_100%,_0%_100%,_0%_30px)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)]'}>
      <div className="plan-name text-2xl font-bold text-[#00ffff] uppercase tracking-[2px] mb-8">{name}</div>
      <div className="plan-price text-[4rem] font-black text-white mb-2">{price}</div>
      <div className="plan-period text-[#a1a1aa] mb-12 uppercase tracking-[1px]">{period}</div>
      <ul className="plan-features list-none mb-12 text-left">
        {features.map((f,i)=> (<li key={i} className="py-4 pl-8 border-b border-[rgba(0,255,255,0.1)] text-[#a1a1aa] relative before:content-['▶'] before:absolute before:left-0 before:text-[#00ffff] before:text-sm">{f}</li>))}
      </ul>
      {featured ? (
        <a href="#" className="btn-primary bg-[linear-gradient(135deg,#00ffff,#7c3aed)] text-[#0f051a] py-[1.2rem] px-[3rem] font-bold uppercase tracking-[2px] no-underline clip-path-[polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Jack In</a>
      ) : (
        <a href="#" className="btn-secondary bg-transparent text-[#00ffff] py-[1.2rem] px-[3rem] border-2 border-[#00ffff] font-bold uppercase tracking-[2px] no-underline clip-path-[polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Enter System</a>
      )}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[linear-gradient(135deg,#00ffff,#ff00ff)] text-[#0f051a] px-6 py-1 text-xs font-bold tracking-[2px]">MOST POPULAR</div>
      )}
    </div>
  );

  return (
    <section id="pricing" className="pricing fade-up py-[120px] px-8">
      <div className="pricing-container max-w-[1400px] mx-auto">
        <div className="section-header text-center mb-20">
          <h2 className="section-title text-5xl font-extrabold text-[#00ffff] uppercase tracking-[2px] mb-4">Access Levels</h2>
          <p className="section-subtitle text-[1.2rem] text-[#a1a1aa] max-w-[600px] mx-auto">Choose your gateway to the future of collaboration</p>
        </div>
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <Plan name="Initiate" price="$49" period="per neural link" features={["Basic quantum processing","5 holographic workspaces","Standard encryption","Community support matrix","Reality sync enabled"]} />
          <Plan name="Nexus" price="$149" period="per neural link" features={["Advanced quantum algorithms","Unlimited holo-workspaces","Quantum encryption fortress","Priority neural support","Mind-reading analytics","Hyperdrive sync protocol"]} featured />
          <Plan name="Transcend" price="$399" period="per neural link" features={["Infinite processing power","Custom reality matrices","Temporal encryption layers","Direct neural interface","Predictive consciousness","Quantum entanglement sync"]} />
        </div>
      </div>
    </section>
  );
}
