export default function Footer(){
  return (
    <footer className="footer mt-10 pt-10 px-4 pb-[30px] border-t border-[rgba(229,231,235,0.2)] text-center bg-black/50">
      <div className="footer-content max-w-[1400px] mx-auto">
        <div className="footer-links flex flex-col md:flex-row justify-center items-center flex-wrap gap-2 mb-8">
          <a href="#" className="text-[#a1a1aa] no-underline font-medium uppercase tracking-[1px] text-sm px-2 hover:text-[#00ffff]">Privacy Policy</a>
          <span className="footer-separator hidden md:inline text-[#00ffff]/50 text-xs">•</span>
          <a href="#" className="text-[#a1a1aa] no-underline font-medium uppercase tracking-[1px] text-sm px-2 hover:text-[#00ffff]">Terms of Service</a>
          <span className="footer-separator hidden md:inline text-[#00ffff]/50 text-xs">•</span>
          <a href="#" className="text-[#a1a1aa] no-underline font-medium uppercase tracking-[1px] text-sm px-2 hover:text-[#00ffff]">Documentation</a>
          <span className="footer-separator hidden md:inline text-[#00ffff]/50 text-xs">•</span>
          <a href="#" className="text-[#a1a1aa] no-underline font-medium uppercase tracking-[1px] text-sm px-2 hover:text-[#00ffff]">Contact Support</a>
        </div>
        <div className="footer-bottom text-[#a1a1aa] text-[0.9rem]">
          <p>© 2025 NexusFlow Systems. All realities reserved.</p>
          <p className="footer-credit text-[0.85rem] opacity-80 mt-2">Brought to you by <a href="https://templatemo.com" target="_blank" rel="noopener nofollow" className="text-[#00ffff] font-semibold hover:underline">TemplateMo</a></p>
        </div>
      </div>
    </footer>
  );
}
