import React, { useState } from 'react';
import { AlertTriangle, Check, X } from 'lucide-react';

export const CareGuarantees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wood' | 'lvt' | 'carpet'>('wood');

  const careTips = {
    wood: {
      routine: 'Dry sweep or vacuum with soft brush attachment daily/weekly. Mop with a barely-damp microfiber flat mop using Bona pH-neutral wood floor cleaner.',
      dos: ['Use felt protector pads under all furniture legs', 'Wipe standing spills within 5 minutes', 'Maintain indoor humidity between 40%–60%'],
      donts: ['NEVER use steam mops (forces moisture into wood pores)', 'Avoid bleach, ammonia, or generic abrasive tile sprays', 'Do not drag heavy appliances across boards'],
    },
    lvt: {
      routine: 'Sweep with a soft electrostatic mop. Damp mop with neutral vinyl cleaner. Scratch-resistant ceramic wear layer requires no waxing.',
      dos: ['Use barrier mats at external entrance doors', 'Spot-clean food drips with warm water', 'Safe for wet mopping unlike natural wood'],
      donts: ['Avoid rubber-backed mats that can discolour vinyl', 'Do not use solvent-based floor polishes'],
    },
    carpet: {
      routine: 'Vacuum regularly (upright with beater bar for cut pile wool; suction-only for loop pile to prevent fuzzing).',
      dos: ['Blot liquids immediately with white paper towel', 'WoolSafe certified spot remover for wine/coffee', 'Professional hot water extraction every 18 months'],
      donts: ['Never rub or scrub wool fibers aggressively', 'Avoid supermarket stain treatments with high alkali pH'],
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-[#f8f4ee] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-2">HONEST WARRANTIES &amp; LONGEVITY</div>
          <h2 className="h2-editorial text-[#302722] mb-4">
            Care and guarantees: what is covered and what voids it
          </h2>
          <p className="text-[17px] text-[#4e433b] font-light leading-[1.76]">
            Twenty-five year wear guarantee on engineered and solid wood, twenty on LVT, ten on
            laminate. It covers the wear layer failing under normal domestic use. It does not cover
            water damage, pet claws, dragging furniture, or steam mops — and steam mops are what
            kills more wood floors than everything else combined.
          </p>
        </div>

        {/* The Famous Steam Mop Warning Banner */}
        <div className="mb-12 p-6 rounded-[6px] bg-[#fbf5ed] border-2 border-[#8a5342]/40 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#8a5342]/15 text-[#8a5342] flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[#302722] mb-1">
                The Steam Mop Warning: Read Before Mopping
              </h3>
              <p className="text-[14px] text-[#5b4d44] leading-relaxed">
                Steam mops inject pressurized vapour at over 100°C straight past the protective oil
                or lacquer layer and into the timber core. This forces wood cells to swell, break, and
                peel. Steam mopping immediately voids manufacturer and Grainhouse guarantees.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 bg-[#8a5342] text-white text-[12px] font-semibold tracking-wide rounded uppercase">
            Voided by Steam
          </span>
        </div>

        {/* Guarantee Matrix & Care Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Guarantee Tiers (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[16px] font-semibold text-[#302722] mb-3">
              Wear Guarantee Terms
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-[4px] bg-[#eee8df] border border-[#e1ddd7] flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[#302722] text-[15px]">Solid &amp; Engineered Wood</h4>
                  <p className="text-[12px] text-[#766f69]">Covers wear layer delamination &amp; mill defects</p>
                </div>
                <span className="font-serif text-[24px] font-medium text-[#6f4f37]">25 Yrs</span>
              </div>

              <div className="p-4 rounded-[4px] bg-[#eee8df] border border-[#e1ddd7] flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[#302722] text-[15px]">Luxury Vinyl Tile (LVT)</h4>
                  <p className="text-[12px] text-[#766f69]">Covers click-joint failure &amp; surface wear-through</p>
                </div>
                <span className="font-serif text-[24px] font-medium text-[#6f4f37]">20 Yrs</span>
              </div>

              <div className="p-4 rounded-[4px] bg-[#eee8df] border border-[#e1ddd7] flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[#302722] text-[15px]">High-Density Laminate</h4>
                  <p className="text-[12px] text-[#766f69]">Covers surface wear layer under domestic footfall</p>
                </div>
                <span className="font-serif text-[24px] font-medium text-[#6f4f37]">10 Yrs</span>
              </div>
            </div>

            {/* Covered vs Not Covered List */}
            <div className="p-5 rounded-[4px] bg-[#eee8df]/70 border border-[#e1ddd7] space-y-3 mt-6">
              <div className="text-[12px] font-semibold text-[#302722] uppercase tracking-wider">
                Summary of Coverage
              </div>
              <div className="space-y-2 text-[13px]">
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#678367] mr-2 mt-0.5 shrink-0" />
                  <span className="text-[#4e433b]">Wear layer failing under standard domestic use</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#678367] mr-2 mt-0.5 shrink-0" />
                  <span className="text-[#4e433b]">Structural integrity and core delamination</span>
                </div>
                <div className="flex items-start">
                  <X className="w-4 h-4 text-[#8a5342] mr-2 mt-0.5 shrink-0" />
                  <span className="text-[#766f69]">Water ingress, flooding, leaking appliances</span>
                </div>
                <div className="flex items-start">
                  <X className="w-4 h-4 text-[#8a5342] mr-2 mt-0.5 shrink-0" />
                  <span className="text-[#766f69]">Pet claw gouges, dragging furniture without pads</span>
                </div>
                <div className="flex items-start">
                  <X className="w-4 h-4 text-[#8a5342] mr-2 mt-0.5 shrink-0" />
                  <span className="text-[#766f69]">Steam mops and caustic chemical cleaners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Material Specific Care Instructions (7 cols) */}
          <div className="lg:col-span-7 bg-[#ede6dc] p-6 rounded-[6px] border border-[#e1ddd7]">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#e1ddd7]">
              <div>
                <span className="eyebrow text-[10px] text-[#6f4f37]">CARE PROTOCOL</span>
                <h3 className="text-[18px] font-semibold text-[#302722]">How to Clean Each Floor Type</h3>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 bg-[#f8f4ee] p-1 rounded border border-[#e1ddd7]">
                <button
                  onClick={() => setActiveTab('wood')}
                  className={`px-3 py-1 text-[12px] font-medium rounded transition-colors ${
                    activeTab === 'wood' ? 'bg-[#6f4f37] text-white' : 'text-[#4e433b]'
                  }`}
                >
                  Wood
                </button>
                <button
                  onClick={() => setActiveTab('lvt')}
                  className={`px-3 py-1 text-[12px] font-medium rounded transition-colors ${
                    activeTab === 'lvt' ? 'bg-[#6f4f37] text-white' : 'text-[#4e433b]'
                  }`}
                >
                  LVT
                </button>
                <button
                  onClick={() => setActiveTab('carpet')}
                  className={`px-3 py-1 text-[12px] font-medium rounded transition-colors ${
                    activeTab === 'carpet' ? 'bg-[#6f4f37] text-white' : 'text-[#4e433b]'
                  }`}
                >
                  Carpet
                </button>
              </div>
            </div>

            {/* Routine paragraph */}
            <div className="mb-5">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#766f69] block mb-1">
                Recommended Routine:
              </span>
              <p className="text-[14px] text-[#302722] font-normal leading-relaxed bg-[#f8f4ee] p-3 rounded border border-[#e1ddd7]">
                {careTips[activeTab].routine}
              </p>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f8f4ee] p-4 rounded border border-[#e1ddd7]">
                <div className="flex items-center space-x-1.5 text-[13px] font-semibold text-[#678367] mb-2">
                  <Check className="w-4 h-4" />
                  <span>Do This:</span>
                </div>
                <ul className="space-y-1.5 text-[13px] text-[#4e433b]">
                  {careTips[activeTab].dos.map((d, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#678367] mr-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f8f4ee] p-4 rounded border border-[#e1ddd7]">
                <div className="flex items-center space-x-1.5 text-[13px] font-semibold text-[#8a5342] mb-2">
                  <X className="w-4 h-4" />
                  <span>Avoid This:</span>
                </div>
                <ul className="space-y-1.5 text-[13px] text-[#4e433b]">
                  {careTips[activeTab].donts.map((d, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#8a5342] mr-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e1ddd7] flex items-center justify-between text-[12px] text-[#766f69]">
              <span>Complimentary Grainhouse Care Pack included with every installation.</span>
              <span className="font-serif text-[#6f4f37] font-medium">Bona &amp; WoolSafe Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
