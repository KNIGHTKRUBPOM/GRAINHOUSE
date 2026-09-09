import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, CheckCircle2, ShieldCheck, Compass, Trees } from 'lucide-react';

interface HeroProps {
  onOpenSurvey: () => void;
  onScrollToVisualiser: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onScrollToVisualiser }) => {
  const trustPoints = [
    { title: 'Prices include fitting', icon: CheckCircle2, detail: 'Zero hidden labour fees' },
    { title: 'Free survey with moisture test', icon: ShieldCheck, detail: 'Protimeter testing included' },
    { title: 'FSC certified timber', icon: Trees, detail: 'FSC-C142880 European oak' },
    { title: '25-year wear guarantee', icon: Compass, detail: 'Full domestic warranty' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e1ddd7]/80 bg-[#f8f4ee]">
      {/* Subtle organic background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#302722 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-[#eee8df] border border-[#e1ddd7] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#678367]" />
              <span className="eyebrow text-[10px] sm:text-[11px] text-[#6f4f37]">
                NOTTINGHAM &amp; EAST MIDLANDS · SUPPLY AND FIT · FSC CERTIFIED · SINCE 2007
              </span>
            </div>

            {/* H1 */}
            <h1 className="h1-editorial text-[#302722] mb-6 tracking-[-0.02em]">
              See it in a room before you commit to forty square metres of it.
            </h1>

            {/* Subline */}
            <p className="text-[17px] sm:text-[18px] text-[#4e433b] font-light leading-[1.76] mb-8 max-w-2xl">
              Wood, engineered, LVT and carpet, supplied and fitted across the East Midlands.
              Prices include fitting, the survey is free, and we take moisture readings before we
              quote rather than after.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenSurvey}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[3px] bg-[#6f4f37] text-[#faf7f2] hover:bg-[#593e2a] active:bg-[#483120] text-[15px] font-medium tracking-wide shadow-md hover:shadow-lg transition-all group"
              >
                <span>Book a Free Survey</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToVisualiser}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[3px] bg-transparent text-[#302722] hover:bg-[#ede6dc] border border-[#302722]/30 hover:border-[#302722] text-[15px] font-medium transition-all group"
              >
                <Eye className="w-4 h-4 mr-2 text-[#6f4f37] transition-transform group-hover:scale-110" />
                <span>Try the Visualiser</span>
              </button>
            </div>

            {/* Four Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-6 border-t border-[#e1ddd7] w-full">
              {trustPoints.map((tp) => {
                const Icon = tp.icon;
                return (
                  <div key={tp.title} className="flex items-start space-x-2.5">
                    <Icon className="w-4 h-4 text-[#678367] mt-1 shrink-0" />
                    <div>
                      <div className="text-[14px] font-medium text-[#302722] leading-tight">
                        {tp.title}
                      </div>
                      <div className="text-[12px] text-[#766f69] font-light mt-0.5">
                        {tp.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Room Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[6px] overflow-hidden border border-[#e1ddd7] shadow-xl bg-[#eee8df] group">
              {/* Main Room Image: A wide oak plank floor in a bright room, low camera angle */}
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="A wide natural oak plank floor in a bright room, low camera angle emphasising grain and length"
                  className="w-full h-full object-cover object-bottom transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-4 right-4 bg-[#f8f4ee]/90 backdrop-blur-md px-3 py-1.5 rounded-[3px] border border-[#e1ddd7] text-[11px] font-sans tracking-wide text-[#302722] shadow-sm">
                  Natural Oak Wide Plank · 190mm
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[4px] bg-[#f8f4ee]/95 backdrop-blur-md border border-[#e1ddd7] shadow-md">
                  <div className="flex items-center justify-between text-[12px] mb-1">
                    <span className="eyebrow text-[10px] text-[#6f4f37]">
                      FSC C142880 CERTIFIED
                    </span>
                    <span className="text-[#678367] font-medium text-[11px] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#678367] mr-1" />
                      In stock Nottingham
                    </span>
                  </div>
                  <div className="text-[14px] font-serif text-[#302722]">
                    Kiln-dried to 8% moisture equilibrium before delivery
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#e1ddd7] flex justify-between items-center text-[12px] text-[#766f69]">
                    <span>Supply &amp; fitting from</span>
                    <span className="font-serif text-[15px] font-medium text-[#302722]">
                      £86/m² all in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset frame */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full -z-10 rounded-[6px] border border-[#6f4f37]/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
