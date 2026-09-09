import React from 'react';
import { motion } from 'motion/react';
import { fittingSteps } from '../data/flooringData';
import { Clock, ShieldCheck, AlertTriangle } from 'lucide-react';

export const FittingProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-[#ede6dc] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-2">FIVE STEPS TO PERFECTION</div>
          <h2 className="h2-editorial text-[#302722] mb-4">
            How we fit: from survey to final clean
          </h2>
          <p className="text-[17px] text-[#4e433b] font-light leading-[1.76]">
            Every step is handled by our directly employed Nottingham fitters. No rushing, no skipping
            acclimatisation, and no leaving you without a functioning home.
          </p>
        </div>

        {/* Steps Container with animated connecting line */}
        <div className="relative">
          {/* Walnut connecting line scaling from left, 0.8s */}
          <div className="hidden lg:block absolute top-[28px] left-[30px] right-[30px] h-[2px] bg-[#d3c9bc] -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="h-full bg-[#6f4f37]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
            {fittingSteps.map((step, idx) => {
              const isAcclimatisation = step.number === '03';

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col p-5 rounded-[5px] border transition-all ${
                    isAcclimatisation
                      ? 'bg-[#f8f4ee] border-[#6f4f37] ring-1 ring-[#6f4f37]/50 shadow-md'
                      : 'bg-[#f8f4ee] border-[#e1ddd7] shadow-sm hover:border-[#b8ad9e]'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-[17px] font-medium border ${
                        isAcclimatisation
                          ? 'bg-[#6f4f37] text-white border-[#6f4f37]'
                          : 'bg-[#eee8df] text-[#302722] border-[#e1ddd7]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#766f69] flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-[#6f4f37]" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-2">
                    <h3 className="text-[17px] font-semibold text-[#302722] flex items-center">
                      {step.title}
                    </h3>
                    {isAcclimatisation && (
                      <span className="inline-flex items-center text-[10px] font-medium text-[#6f4f37] bg-[#eee8df] px-2 py-0.5 rounded mt-1">
                        <AlertTriangle className="w-3 h-3 mr-1 text-[#8a5342]" />
                        Critical Trade Integrity
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-[#4e433b] font-light leading-[1.68] flex-1">
                    {step.description}
                  </p>

                  {/* Micro reassurance */}
                  <div className="mt-4 pt-3 border-t border-[#e1ddd7]/70 text-[11px] text-[#766f69]">
                    {idx === 0 && 'Three distinct pin & surface readings'}
                    {idx === 1 && 'Transparent line-by-line quote'}
                    {idx === 2 && 'Prevents 100% of seasonal cupping'}
                    {idx === 3 && 'Room-by-room living protection'}
                    {idx === 4 && 'Complimentary care pack included'}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trade Note on Acclimatisation */}
        <div className="mt-10 p-5 rounded-[5px] bg-[#f8f4ee] border border-[#e1ddd7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#678367] mt-0.5 shrink-0" />
            <p className="text-[14px] text-[#4e433b] font-light">
              <strong className="text-[#302722] font-semibold">Why 7 days acclimatisation matters:</strong>{' '}
              Timber expands and contracts based on ambient relative humidity. Letting boards rest in
              your home’s exact atmosphere before fixing is the difference between a floor that lasts
              thirty years and one that buckles in autumn.
            </p>
          </div>
          <span className="text-[12px] font-serif text-[#6f4f37] italic shrink-0">
            Never compromise on drying time.
          </span>
        </div>
      </div>
    </section>
  );
};
