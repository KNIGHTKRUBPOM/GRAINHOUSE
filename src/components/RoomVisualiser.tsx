import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { finishes } from '../data/flooringData';
import { Calculator, Check, Info, ArrowRight, Layers } from 'lucide-react';

interface RoomVisualiserProps {
  onOpenSurveyWithFinish: (finishName: string) => void;
  onOpenSampleModal: () => void;
}

export const RoomVisualiser: React.FC<RoomVisualiserProps> = ({
  onOpenSurveyWithFinish,
  onOpenSampleModal,
}) => {
  const [sel, setSel] = useState<string>('oak-natural');
  const [roomArea, setRoomArea] = useState<number>(32); // default 32 m²
  const [showCalculator, setShowCalculator] = useState<boolean>(false);
  const [lightingMode, setLightingMode] = useState<'daylight' | 'evening'>('daylight');

  const f = finishes.find((x) => x.id === sel) || finishes[0];
  const totalPerM2 = f.price + f.fit;
  const supplyTotal = f.price * roomArea;
  const fittingTotal = f.fit * roomArea;
  const combinedTotal = totalPerM2 * roomArea;

  return (
    <section id="visualiser" className="py-14 lg:py-22 bg-[#f4eee5] border-b border-[#e1ddd7] relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#e1ddd7] gap-4">
          <div>
            <div className="eyebrow mb-2">SEE IT FIRST</div>
            <h2 className="h2-editorial text-[#302722]">Same room, different floors</h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#766f69] font-light max-w-md leading-relaxed">
            Selecting a finish cross-fades the room so you can see timber grain, plank proportions,
            and light reflections at scale rather than imagining from a 40mm palm sample.
          </p>
        </div>

        {/* Visualiser Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Room View Area (8 cols on large) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[6px] overflow-hidden border border-[#e1ddd7] bg-[#302722] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel + lightingMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full"
                >
                  <img
                    src={f.roomImage}
                    alt={f.alt}
                    className={`h-full w-full object-cover object-center transition-all duration-500 ${
                      lightingMode === 'evening' ? 'brightness-90 sepia-[0.15] contrast-105' : ''
                    }`}
                  />
                  {/* Subtle vignette for realistic room depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/50 via-transparent to-black/15 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badges on Room Photo */}
              <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
                <span className="bg-[#f8f4ee]/95 backdrop-blur-md px-3 py-1 rounded-[3px] border border-[#e1ddd7] text-[12px] font-medium text-[#302722] shadow-sm whitespace-nowrap">
                  {f.name}
                </span>
                <span className="hidden sm:inline-flex bg-[#302722]/80 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[11px] font-sans text-[#faf7f2] border border-white/10 whitespace-nowrap">
                  {f.category}
                </span>
              </div>

              {/* Lighting Ambience Selector */}
              <div className="absolute top-3.5 right-3.5 z-10 flex items-center bg-[#f8f4ee]/95 backdrop-blur-md rounded-[4px] border border-[#e1ddd7] p-0.5 shadow-sm text-[12px]">
                <button
                  onClick={() => setLightingMode('daylight')}
                  className={`px-2.5 py-1 rounded-[3px] transition-colors whitespace-nowrap ${
                    lightingMode === 'daylight'
                      ? 'bg-[#6f4f37] text-white font-medium'
                      : 'text-[#4e433b] hover:text-[#302722]'
                  }`}
                >
                  Daylight
                </button>
                <button
                  onClick={() => setLightingMode('evening')}
                  className={`px-2.5 py-1 rounded-[3px] transition-colors whitespace-nowrap ${
                    lightingMode === 'evening'
                      ? 'bg-[#6f4f37] text-white font-medium'
                      : 'text-[#4e433b] hover:text-[#302722]'
                  }`}
                >
                  Warm Evening
                </button>
              </div>

              {/* In-photo Floor Finish Spec Pill */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:right-auto bg-[#f8f4ee]/95 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-[#e1ddd7] text-[12px] text-[#4e433b] flex items-center space-x-2 shadow-md max-w-full">
                <Layers className="w-3.5 h-3.5 text-[#6f4f37] shrink-0" />
                <span className="truncate">{f.textureDetails}</span>
              </div>
            </div>

            {/* Swatches Row beneath room photo */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[12.5px] font-medium tracking-wide uppercase text-[#766f69]">
                  Select floor finish to preview:
                </span>
                <span className="text-[12px] text-[#6f4f37] font-medium">
                  {finishes.findIndex((x) => x.id === sel) + 1} of {finishes.length} Finishes
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {finishes.map((item) => {
                  const isSelected = item.id === sel;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSel(item.id)}
                      className={`group relative flex flex-col p-2.5 sm:p-3 rounded-[4px] border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#f8f4ee] border-[#6f4f37] shadow-md ring-2 ring-[#6f4f37]/80'
                          : 'bg-[#eee8df] border-[#e1ddd7] hover:border-[#b8ad9e] hover:bg-[#f8f4ee]'
                      }`}
                    >
                      {/* Swatch color / pattern tile with scale 1.1 and walnut ring on hover */}
                      <div className="relative w-full h-11 rounded-[3px] overflow-hidden mb-2 border border-black/10 shadow-inner">
                        <div
                          className="w-full h-full transform transition-all duration-200 group-hover:scale-110"
                          style={{
                            background: item.swatchTexture,
                            backgroundColor: item.swatchColor,
                          }}
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#6f4f37]/20 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full bg-[#6f4f37] text-white flex items-center justify-center shadow">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-[12.5px] sm:text-[13px] font-semibold text-[#302722] leading-tight truncate">
                        {item.name}
                      </div>
                      <div className="text-[11.5px] sm:text-[12px] font-serif text-[#6f4f37] mt-0.5 tabular-nums whitespace-nowrap">
                        £{item.price + item.fit}/m² all in
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Line: Re-mounts and fades 0.25s as specified */}
            <div className="mt-5 p-4 sm:p-5 rounded-[5px] bg-[#f8f4ee] border border-[#e1ddd7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col min-w-0"
                >
                  <div className="text-[11px] uppercase tracking-wider text-[#766f69] font-medium mb-1">
                    Complete pricing breakdown
                  </div>
                  <p className="text-[16px] sm:text-[18px] text-[#302722] price-num leading-snug">
                    £{f.price}/m² supply · £{f.fit}/m² fitting ·{' '}
                    <strong className="text-[#6f4f37] font-semibold whitespace-nowrap">
                      £{f.price + f.fit}/m² all in
                    </strong>
                  </p>
                  <p className="text-[13px] text-[#766f69] font-light mt-1 leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="inline-flex items-center px-3.5 py-2 text-[13px] font-medium text-[#302722] bg-[#eee8df] hover:bg-[#e2ded7] rounded-[3px] border border-[#d8d1c7] transition-colors whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4 mr-1.5 text-[#6f4f37]" />
                  {showCalculator ? 'Hide Estimator' : 'Room Estimator'}
                </button>
                <button
                  onClick={() => onOpenSurveyWithFinish(f.name)}
                  className="inline-flex items-center px-4 py-2 text-[13px] font-medium text-white bg-[#6f4f37] hover:bg-[#593e2a] rounded-[3px] shadow transition-colors whitespace-nowrap"
                >
                  <span>Book Survey</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Detail & Room Area Calculator (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            {/* Live Room Size Calculator Card */}
            <div className="bg-[#f8f4ee] p-5 rounded-[6px] border border-[#e1ddd7] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-4 h-4 text-[#6f4f37]" />
                  <h3 className="text-[15px] font-semibold text-[#302722]">Instant Room Estimate</h3>
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#eee8df] text-[#6f4f37] whitespace-nowrap">
                  No obligation
                </span>
              </div>

              <p className="text-[13px] text-[#766f69] leading-relaxed mb-4">
                Slide to approximate your floor area in square metres (an average living room is 25–35m²):
              </p>

              {/* Slider */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="text-[#4e433b] font-medium">Room Area:</span>
                  <span className="font-serif text-[17px] font-medium text-[#302722] tabular-nums whitespace-nowrap">
                    {roomArea} m²{' '}
                    <span className="text-[11.5px] text-[#766f69] font-sans">
                      (~{Math.round(roomArea * 10.764)} sq ft)
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="1"
                  value={roomArea}
                  onChange={(e) => setRoomArea(Number(e.target.value))}
                  className="w-full accent-[#6f4f37] cursor-pointer h-2 bg-[#e2ded7] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#766f69]">
                  <span>Small (10m²)</span>
                  <span>Typical (32m²)</span>
                  <span>Large (90m²)</span>
                </div>
              </div>

              {/* Cost Summary Box */}
              <div className="p-4 rounded-[4px] bg-[#f3ede3] border border-[#e1ddd7] space-y-2.5">
                <div className="flex justify-between items-center text-[13px] text-[#4e433b]">
                  <span>Timber Supply ({roomArea}m² @ £{f.price})</span>
                  <span className="font-serif tabular-nums text-[#302722] font-medium whitespace-nowrap">
                    £{supplyTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] text-[#4e433b]">
                  <span>Fitting ({roomArea}m² @ £{f.fit})</span>
                  <span className="font-serif tabular-nums text-[#302722] font-medium whitespace-nowrap">
                    £{fittingTotal.toLocaleString()}
                  </span>
                </div>
                <div className="pt-2.5 border-t border-[#e1ddd7] flex justify-between items-baseline">
                  <div>
                    <span className="text-[14px] font-semibold text-[#302722] block">Total All In</span>
                    <span className="text-[11px] text-[#766f69] block">Supply &amp; fitting included</span>
                  </div>
                  <span className="font-serif text-[23px] font-medium text-[#6f4f37] tabular-nums whitespace-nowrap">
                    £{combinedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Survey Call to Action */}
              <button
                onClick={() => onOpenSurveyWithFinish(f.name)}
                className="w-full mt-4 py-3 bg-[#6f4f37] hover:bg-[#593e2a] text-white text-[13.5px] font-medium rounded-[3px] transition-colors flex items-center justify-center space-x-1.5 shadow"
              >
                <span>Book Free Moisture Survey for This Room</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Finish Specifications Card */}
            <div className="bg-[#f8f4ee] p-5 rounded-[6px] border border-[#e1ddd7]">
              <h3 className="text-[14px] font-semibold text-[#302722] mb-3 flex items-center">
                <Info className="w-4 h-4 mr-2 text-[#6f4f37]" />
                Technical Specification
              </h3>

              <dl className="text-[13px] space-y-2 text-[#4e433b]">
                <div className="flex justify-between py-1 border-b border-[#e1ddd7]/60">
                  <dt className="text-[#766f69]">Species / Core</dt>
                  <dd className="font-medium text-[#302722] text-right truncate max-w-[170px]">
                    {f.woodSpecies}
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e1ddd7]/60">
                  <dt className="text-[#766f69]">Surface Treatment</dt>
                  <dd className="font-medium text-[#302722] text-right truncate max-w-[170px]">
                    {f.finishType}
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e1ddd7]/60">
                  <dt className="text-[#766f69]">Wear Guarantee</dt>
                  <dd className="font-medium text-[#678367] whitespace-nowrap">{f.warrantyYears} Years Domestic</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-[#766f69]">Acclimatisation</dt>
                  <dd className="font-medium text-[#302722] whitespace-nowrap">Strict 7-Day In-Room Wait</dd>
                </div>
              </dl>

              <div className="mt-4 pt-3 border-t border-[#e1ddd7] flex items-center justify-between">
                <span className="text-[12px] text-[#766f69]">Want to touch the real wood?</span>
                <button
                  onClick={onOpenSampleModal}
                  className="text-[13px] font-medium text-[#6f4f37] hover:underline"
                >
                  Order Free Swatch &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
