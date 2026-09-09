import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenSurvey: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenSurvey }) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#f8f4ee]/95 backdrop-blur-md border-t border-[#e1ddd7] p-3 shadow-2xl flex items-center gap-2"
    >
      <a
        href="tel:01155550163"
        aria-label="Call Grainhouse directly"
        className="flex items-center justify-center px-4 py-3 bg-[#eee8df] hover:bg-[#e2ded7] text-[#302722] rounded-[3px] border border-[#d8d1c7] text-[13px] font-medium transition-colors shrink-0"
      >
        <Phone className="w-4 h-4 text-[#6f4f37]" />
      </a>

      <button
        onClick={onOpenSurvey}
        className="flex-1 py-3 px-4 bg-[#6f4f37] active:bg-[#593e2a] text-[#faf7f2] font-medium text-[14px] rounded-[3px] shadow transition-colors flex items-center justify-center space-x-2"
      >
        <span>Book a Free Survey</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </aside>
  );
};
