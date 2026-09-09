import React from 'react';
import { Phone, MapPin, Clock, Trees, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenSurvey: () => void;
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSurvey, onOpenSampleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241d19] text-[#f8f4ee] pt-16 pb-24 md:pb-16 border-t border-[#3d3129]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#3d3129]">
          {/* Column 1: Brand & Certification (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif tracking-tight text-[26px] text-white block">
                GRAINHOUSE FLOORING
              </span>
              <span className="eyebrow text-[10px] text-[#c4aa95] tracking-[0.24em] block mt-1">
                SUPPLY AND FITTING · NOTTINGHAM
              </span>
            </div>

            <p className="text-[15px] font-serif text-[#d6cbbe] italic">
              “Prices include fitting. The survey is free.”
            </p>

            <div className="p-4 rounded bg-[#302722] border border-[#45372e] space-y-2 mt-4">
              <div className="flex items-center space-x-2 text-[#8ea78e] text-[13px] font-semibold">
                <Trees className="w-4 h-4" />
                <span>FSC® Certified Supplier C142880</span>
              </div>
              <p className="text-[12px] text-[#a6988c] leading-relaxed">
                All oak sourced from responsibly managed European woodlands with continuous chain of
                custody verification.
              </p>
            </div>
          </div>

          {/* Column 2: Showroom & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="eyebrow text-[11px] text-[#c4aa95] tracking-widest block">
              NOTTINGHAM SHOWROOM
            </span>

            <div className="flex items-start space-x-2.5 text-[14px] text-[#d6cbbe]">
              <MapPin className="w-4 h-4 text-[#c4aa95] mt-1 shrink-0" />
              <div>
                <strong className="text-white block font-medium">Showroom Address:</strong>
                210 Alfreton Road,
                <br />
                Nottingham NG7 3NR
              </div>
            </div>

            <div className="flex items-start space-x-2.5 text-[14px] text-[#d6cbbe] pt-2">
              <Clock className="w-4 h-4 text-[#c4aa95] mt-1 shrink-0" />
              <div>
                <strong className="text-white block font-medium">Showroom Hours:</strong>
                Mon–Fri 8:30–17:30
                <br />
                Sat 9:00–16:00
                <br />
                <span className="text-[#a6988c] text-[12px]">Sunday closed for fitting prep</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="eyebrow text-[11px] text-[#c4aa95] tracking-widest block">
              DIRECT CONTACT
            </span>

            <div className="space-y-2">
              <a
                href="tel:01155550163"
                className="flex items-center text-[18px] font-serif text-white hover:text-[#c4aa95] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 mr-2 text-[#c4aa95]" />
                <span>0115 555 0163</span>
              </a>

              <a
                href="mailto:enquiries@grainhouseflooring.co.uk"
                className="flex items-center text-[13px] text-[#d6cbbe] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-[#c4aa95]" />
                <span>enquiries@grainhouseflooring.co.uk</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[12px] text-[#a6988c] block font-medium uppercase tracking-wider mb-1">
                Fitted Across East Midlands:
              </span>
              <p className="text-[12px] text-[#b8ab9d] leading-relaxed">
                Nottingham · West Bridgford · Beeston · Wollaton · Bingham · Southwell · Derby &amp;
                surrounds.
              </p>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Actions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="eyebrow text-[11px] text-[#c4aa95] tracking-widest block">
              EXPLORE
            </span>

            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="#visualiser" className="text-[#d6cbbe] hover:text-white transition-colors">
                  Room Visualiser
                </a>
              </li>
              <li>
                <a href="#floortypes" className="text-[#d6cbbe] hover:text-white transition-colors">
                  Floor Types
                </a>
              </li>
              <li>
                <a href="#prices" className="text-[#d6cbbe] hover:text-white transition-colors">
                  Price List
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#d6cbbe] hover:text-white transition-colors">
                  5-Step Process
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSampleModal}
                  className="text-[#c4aa95] hover:text-white transition-colors text-left"
                >
                  Free Sample Pack
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSurvey}
                  className="text-[#8ea78e] hover:underline font-medium text-left"
                >
                  Book Free Survey &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#8e8074]">
          <div>
            © 2026 Grainhouse Flooring Ltd. Registered in England &amp; Wales. FSC® C142880.
          </div>

          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span>25-Year Wear Guarantee</span>
            <span>Moisture-Tested Fitting</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center text-[#c4aa95] hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
