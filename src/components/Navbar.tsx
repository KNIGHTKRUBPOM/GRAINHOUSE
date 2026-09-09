import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenSurvey: () => void;
  onOpenSampleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey, onOpenSampleModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visualiser', href: '#visualiser' },
    { label: 'Floor Types', href: '#floortypes' },
    { label: 'Prices', href: '#prices' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 h-[74px] w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#f8f4ee]/95 backdrop-blur-md border-[#e1ddd7] shadow-sm'
          : 'bg-[#f8f4ee] border-[#e1ddd7]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <div className="shrink-0 flex items-center">
          <a href="#" className="flex flex-col group text-left">
            <span className="font-serif tracking-tight text-[22px] sm:text-[24px] font-normal text-[#302722] group-hover:text-[#6f4f37] transition-colors leading-none whitespace-nowrap">
              GRAINHOUSE
            </span>
            <span className="eyebrow text-[9.5px] tracking-[0.24em] text-[#6f4f37] mt-1.5 whitespace-nowrap">
              FLOORING · NOTTINGHAM
            </span>
          </a>
        </div>

        {/* Center: 5 Clean Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[14.5px] xl:text-[15px] font-normal text-[#4e433b] hover:text-[#302722] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#6f4f37] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 
          Right: Phone Number & Book a Free Survey Button 
          Locked in the EXACT SAME ROW (flex-row flex-nowrap items-center)
        */}
        <div className="hidden md:flex flex-row items-center flex-nowrap space-x-4 xl:space-x-5 shrink-0">
          <a
            href="tel:01155550163"
            className="flex flex-row items-center flex-nowrap text-[14.5px] xl:text-[15.5px] font-medium text-[#302722] hover:text-[#6f4f37] transition-colors group shrink-0 whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-full bg-[#ede6dc] border border-[#e1ddd7] flex items-center justify-center mr-2 group-hover:bg-[#6f4f37] group-hover:border-[#6f4f37] transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#6f4f37] group-hover:text-white transition-colors" />
            </span>
            <span className="tabular-nums font-serif text-[16px] xl:text-[17px] whitespace-nowrap">
              0115 555 0163
            </span>
          </a>

          <button
            onClick={onOpenSurvey}
            className="inline-flex items-center justify-center px-4.5 xl:px-5 py-2.5 rounded-[3px] bg-[#6f4f37] text-[#faf7f2] hover:bg-[#593e2a] active:bg-[#483120] text-[13.5px] font-medium tracking-wide transition-all shadow-sm hover:shadow group shrink-0 whitespace-nowrap"
          >
            <span>Book a Free Survey</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>

        {/* Mobile trigger (<768px) */}
        <div className="flex md:hidden items-center space-x-2 shrink-0">
          <a
            href="tel:01155550163"
            aria-label="Call Grainhouse Flooring"
            className="p-2 text-[#302722] hover:text-[#6f4f37] border border-[#e1ddd7] rounded bg-[#eee8df]"
          >
            <Phone className="w-4 h-4 text-[#6f4f37]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#302722] hover:text-[#6f4f37] rounded border border-[#e1ddd7] bg-[#eee8df]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer with phone & survey ALSO in the exact same row */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[74px] left-0 w-full bg-[#f8f4ee] border-b border-[#e1ddd7] shadow-xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[17px] font-serif text-[#302722] hover:text-[#6f4f37] py-2 border-b border-[#e1ddd7]/60"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="text-left text-[15px] font-medium text-[#6f4f37] py-2 border-b border-[#e1ddd7]/60"
            >
              Order Free Timber Swatch Pack
            </button>

            {/* Same Row for Phone & Survey in Mobile Drawer */}
            <div className="pt-3 flex flex-row items-center space-x-3">
              <a
                href="tel:01155550163"
                className="flex-1 flex items-center justify-center py-2.5 px-3 bg-[#eee8df] border border-[#e1ddd7] rounded-[3px] text-[14px] font-serif text-[#302722]"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#6f4f37]" />
                <span className="whitespace-nowrap">0115 555 0163</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSurvey();
                }}
                className="flex-1 py-2.5 px-3 bg-[#6f4f37] text-[#faf7f2] font-medium text-[13.5px] rounded-[3px] shadow text-center whitespace-nowrap"
              >
                Book Free Survey
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[12px] text-[#766f69] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#678367]" />
              <span>Moisture testing included · No obligation</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
