import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { grainStripImages } from '../data/flooringData';
import { Trees, ShieldCheck } from 'lucide-react';

export const GrainStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax translation rates
  const yRate1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-24, 24]);
  const yRate2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [28, -28]);
  const yRate3 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-36, 36]);
  const yRate4 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);
  const yRate5 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-18, 18]);

  const rates = [yRate1, yRate2, yRate3, yRate4, yRate5];

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-[#2a221d] text-[#f8f4ee] overflow-hidden border-y border-[#3d322b] relative"
    >
      {/* Background grain watermark */}
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 text-[#9e8b7d] mb-3">
              <Trees className="w-4 h-4 text-[#8ea78e]" />
              <span className="eyebrow text-[11px] text-[#c4aa95] tracking-[0.22em]">
                FSC-CERTIFIED TIMBER PROVENANCE
              </span>
            </div>
            <h2 className="h2-editorial text-[#faf7f2] max-w-2xl">
              Grain, growth rings, and patience
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] text-[#d6cbbe] font-light leading-[1.8] max-w-2xl">
              Our oak comes from FSC-certified European forests, mostly France and Croatia, and is
              kiln-dried to eight percent before it reaches us. We hold stock rather than ordering
              per job, which is why we can usually fit within two weeks.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-3 bg-[#362c26]/60 p-5 rounded-[4px] border border-[#4a3d35]">
            <div className="flex items-center space-x-2 text-[#8ea78e] text-[13px] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>FSC Chain of Custody C142880</span>
            </div>
            <div className="text-[13px] text-[#b8ab9d] leading-relaxed">
              Every plank is traceable to sustainably managed European woodlands with active replanting
              ratios exceeding 3:1.
            </div>
            <div className="text-[12px] font-mono text-[#c4aa95] pt-1">
              Equilibrium Moisture Content: 8.0% ± 0.5%
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Band of Five Close-Crop Wood Grain Photographs (Effect 2) */}
      <div className="relative w-full overflow-x-auto pb-4 pt-6 px-4 no-scrollbar">
        <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-6 min-w-[900px] max-w-site mx-auto">
          {grainStripImages.map((grain, index) => {
            const yMotion = rates[index % rates.length];
            return (
              <motion.div
                key={grain.id}
                style={{ y: yMotion }}
                className="flex-1 min-w-[180px] max-w-[240px] group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden border border-[#52443b] shadow-2xl bg-[#1d1714]">
                  <img
                    src={grain.image}
                    alt={grain.title}
                    className="w-full h-full object-cover object-center filter contrast-110 saturate-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1714] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Micro caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono text-[#c4aa95] uppercase tracking-wider block">
                      Timber 0{grain.id}
                    </span>
                    <h4 className="text-[13px] font-serif text-[#faf7f2] font-medium leading-tight mt-0.5">
                      {grain.title}
                    </h4>
                  </div>
                </div>

                {/* Subtitle below */}
                <p className="mt-2.5 text-[11px] text-[#9e8f82] font-light leading-snug line-clamp-2 px-1">
                  {grain.caption}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footnote on reduced motion */}
      <div className="text-center mt-6 text-[12px] text-[#857467] font-light">
        {shouldReduceMotion
          ? 'Shallow parallax paused for your reduced motion preference'
          : 'Subtle scroll parallax highlighting authentic wood fiber orientation'}
      </div>
    </section>
  );
};
