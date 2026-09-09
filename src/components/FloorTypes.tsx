import React, { useState } from 'react';
import { floorTypes } from '../data/flooringData';
import { Check, X, ArrowRight } from 'lucide-react';

interface FloorTypesProps {
  onOpenSurveyWithProduct: (productName: string) => void;
}

export const FloorTypes: React.FC<FloorTypesProps> = ({ onOpenSurveyWithProduct }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wood' | 'vinyl' | 'carpet'>('all');

  const filteredTypes = floorTypes.filter((t) => {
    if (activeFilter === 'wood') return t.id.includes('wood') || t.id.includes('parquet');
    if (activeFilter === 'vinyl') return t.id === 'lvt' || t.id === 'laminate';
    if (activeFilter === 'carpet') return t.id === 'carpet';
    return true;
  });

  return (
    <section id="floortypes" className="py-16 lg:py-24 bg-[#f8f4ee] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-2">FLOOR TYPES &amp; HONEST ADVICE</div>
          <h2 className="h2-editorial text-[#302722] mb-4">
            Which floor is actually right for your room
          </h2>
          <p className="text-[17px] text-[#4e433b] font-light leading-[1.76]">
            Every flooring type has genuine trade-offs. We tell you exactly when each material is the
            right choice and when it is not, because selling the wrong floor guarantees regrets in
            three years.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Floor Types (6)' },
            { id: 'wood', label: 'Real Timber & Parquet' },
            { id: 'vinyl', label: 'LVT & Laminate' },
            { id: 'carpet', label: 'Wool Carpet' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-[13px] font-medium rounded-[3px] transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#6f4f37] text-[#faf7f2] shadow-sm'
                  : 'bg-[#eee8df] text-[#4e433b] hover:bg-[#e2ded7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTypes.map((item) => (
            <article
              key={item.id}
              className="bg-[#eee8df]/60 hover:bg-[#eee8df] border border-[#e1ddd7] rounded-[5px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md group"
            >
              {/* Card Photo Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#302722]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="eyebrow text-[9px] text-[#faf7f2]/80">
                      {item.tagline}
                    </span>
                    <h3 className="text-[20px] font-serif text-white tracking-wide">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-[12px] font-serif text-[#faf7f2] bg-[#302722]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    {item.priceGuide.split('·')[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* Core description */}
                <p className="text-[15px] text-[#4e433b] font-light leading-[1.7]">
                  {item.description}
                </p>

                {/* Honest breakdown: Right For vs Not For */}
                <div className="space-y-3 pt-4 border-t border-[#e1ddd7]">
                  <div>
                    <div className="flex items-center text-[12px] font-semibold text-[#302722] uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#678367] mr-1.5" />
                      When it is the right choice:
                    </div>
                    <ul className="space-y-1">
                      {item.rightFor.map((r, i) => (
                        <li key={i} className="flex items-start text-[13px] text-[#4e433b]">
                          <Check className="w-3.5 h-3.5 text-[#678367] mr-2 mt-1 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center text-[12px] font-semibold text-[#8a5342] uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8a5342] mr-1.5" />
                      When it is NOT:
                    </div>
                    <ul className="space-y-1">
                      {item.notFor.map((n, i) => (
                        <li key={i} className="flex items-start text-[13px] text-[#766f69]">
                          <X className="w-3.5 h-3.5 text-[#8a5342] mr-2 mt-1 shrink-0" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical badges & CTA footer */}
                <div className="pt-4 border-t border-[#e1ddd7] space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#766f69]">
                    <div className="bg-[#f8f4ee] p-2 rounded border border-[#e1ddd7]">
                      <span className="block font-medium text-[#302722]">Restoration</span>
                      <span className="truncate block">{item.sanding}</span>
                    </div>
                    <div className="bg-[#f8f4ee] p-2 rounded border border-[#e1ddd7]">
                      <span className="block font-medium text-[#302722]">Underfloor Heating</span>
                      <span className={item.ufhReady ? 'text-[#678367] font-medium' : 'text-[#8a5342]'}>
                        {item.ufhReady ? '✓ Fully Compatible' : '✕ Not Recommended'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenSurveyWithProduct(item.name)}
                    className="w-full mt-2 py-2.5 px-3 bg-[#f8f4ee] hover:bg-[#6f4f37] text-[#302722] hover:text-white border border-[#e1ddd7] hover:border-[#6f4f37] text-[13px] font-medium rounded-[3px] transition-colors flex items-center justify-between"
                  >
                    <span>Enquire about {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
