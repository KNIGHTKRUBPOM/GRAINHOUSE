import React, { useState } from 'react';
import { motion } from 'motion/react';
import { priceList, priceExtras } from '../data/flooringData';
import { ShieldCheck, ArrowRight, Calculator } from 'lucide-react';

interface PriceTableProps {
  onOpenSurveyWithProduct: (productName: string) => void;
}

export const PriceTable: React.FC<PriceTableProps> = ({ onOpenSurveyWithProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [interactiveCalcOpen, setInteractiveCalcOpen] = useState(false);
  const [calcProductIndex, setCalcProductIndex] = useState(4); // Default Natural Oak
  const [calcArea, setCalcArea] = useState(30);
  const [includeUnderlay, setIncludeUnderlay] = useState(true);
  const [includeLevelling, setIncludeLevelling] = useState(false);
  const [includeUplift, setIncludeUplift] = useState(false);

  const categories = ['All', 'Solid Wood', 'Engineered', 'Parquet', 'LVT', 'Laminate', 'Carpet'];

  const filteredPrices = priceList.filter(
    (p) => selectedCategory === 'All' || p.category.includes(selectedCategory)
  );

  // Interactive calculation
  const currentProduct = priceList[calcProductIndex];
  const underlayCostPerM2 = 10;
  const levellingCostPerM2 = 18;
  const upliftCostPerM2 = 8;

  const baseSupplyTotal = currentProduct.supply * calcArea;
  const baseFittingTotal = currentProduct.fitting * calcArea;
  const underlayTotal = includeUnderlay ? underlayCostPerM2 * calcArea : 0;
  const levellingTotal = includeLevelling ? levellingCostPerM2 * calcArea : 0;
  const upliftTotal = includeUplift ? upliftCostPerM2 * calcArea : 0;
  const grandTotal =
    baseSupplyTotal + baseFittingTotal + underlayTotal + levellingTotal + upliftTotal;

  return (
    <section id="prices" className="py-16 lg:py-24 bg-[#eee8df] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#e1ddd7]">
          <div className="max-w-2xl">
            <div className="eyebrow mb-2">COMPLETE TRANSPARENCY</div>
            <h2 className="h2-editorial text-[#302722] mb-3">
              Full price list, fitting included
            </h2>
            <p className="text-[17px] text-[#4e433b] font-light leading-[1.76]">
              Hiding the fitting cost until you have fallen in love with a wood is why flooring
              websites fail customers. Below are our real, fixed prices per square metre for both
              supply and professional fitting.
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex items-center space-x-3">
            <button
              onClick={() => setInteractiveCalcOpen(!interactiveCalcOpen)}
              className="inline-flex items-center px-4 py-2.5 rounded-[3px] bg-[#6f4f37] text-white hover:bg-[#593e2a] text-[14px] font-medium shadow-sm transition-colors"
            >
              <Calculator className="w-4 h-4 mr-2" />
              <span>{interactiveCalcOpen ? 'Close Live Estimator' : 'Instant Total Estimator'}</span>
            </button>
          </div>
        </div>

        {/* Optional Live Estimator Bar */}
        {interactiveCalcOpen && (
          <div className="mb-10 p-6 rounded-[6px] bg-[#f8f4ee] border border-[#6f4f37]/40 shadow-lg animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-[#e1ddd7]">
              <div>
                <span className="eyebrow text-[10px] text-[#6f4f37]">INTERACTIVE ESTIMATOR</span>
                <h3 className="text-[18px] font-serif text-[#302722]">
                  Customize your exact quote
                </h3>
              </div>
              <span className="text-[13px] text-[#766f69] mt-1 md:mt-0">
                Itemised transparent pricing · Free on-site survey verifies all dimensions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Product selector & area */}
              <div className="md:col-span-4 space-y-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#302722] mb-1.5">
                    Select Product:
                  </label>
                  <select
                    value={calcProductIndex}
                    onChange={(e) => setCalcProductIndex(Number(e.target.value))}
                    className="w-full bg-[#eee8df] border border-[#e1ddd7] rounded-[3px] px-3 py-2 text-[14px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                  >
                    {priceList.map((p, idx) => (
                      <option key={p.product} value={idx}>
                        {p.product} (£{p.total}/m² all in)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-[13px] text-[#302722] font-semibold mb-1">
                    <span>Floor Area:</span>
                    <span className="font-serif text-[16px] text-[#6f4f37] font-medium">
                      {calcArea} m² (~{Math.round(calcArea * 10.764)} sq ft)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="100"
                    value={calcArea}
                    onChange={(e) => setCalcArea(Number(e.target.value))}
                    className="w-full accent-[#6f4f37] h-2 bg-[#e2ded7] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Extras checkboxes */}
              <div className="md:col-span-4 space-y-2.5 text-[13px] text-[#4e433b] border-y md:border-y-0 md:border-x border-[#e1ddd7] py-4 md:py-0 md:px-6">
                <span className="block font-semibold text-[#302722] mb-2">Optional Extras:</span>

                <label className="flex items-center space-x-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeUnderlay}
                    onChange={(e) => setIncludeUnderlay(e.target.checked)}
                    className="rounded accent-[#6f4f37] w-4 h-4"
                  />
                  <span>
                    Premium Underlay (+£{underlayCostPerM2}/m²: £{underlayTotal})
                  </span>
                </label>

                <label className="flex items-center space-x-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLevelling}
                    onChange={(e) => setIncludeLevelling(e.target.checked)}
                    className="rounded accent-[#6f4f37] w-4 h-4"
                  />
                  <span>
                    Self-levelling compound (+£{levellingCostPerM2}/m²: £{levellingTotal})
                  </span>
                </label>

                <label className="flex items-center space-x-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeUplift}
                    onChange={(e) => setIncludeUplift(e.target.checked)}
                    className="rounded accent-[#6f4f37] w-4 h-4"
                  />
                  <span>
                    Uplift &amp; disposal of old floor (+£{upliftCostPerM2}/m²: £{upliftTotal})
                  </span>
                </label>
              </div>

              {/* Grand Total output & CTA */}
              <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
                <div className="text-[12px] uppercase tracking-wider text-[#766f69] font-medium">
                  Estimated Total For {calcArea}m²
                </div>
                <div className="font-serif text-[32px] sm:text-[38px] font-medium text-[#6f4f37] price-num leading-tight">
                  £{grandTotal.toLocaleString()}
                </div>
                <div className="text-[12px] text-[#766f69] mb-3">
                  Supply: £{baseSupplyTotal} · Fitting: £{baseFittingTotal} · Furniture moving free
                </div>
                <button
                  onClick={() => onOpenSurveyWithProduct(`${currentProduct.product} (${calcArea}m² estimate)`)}
                  className="px-5 py-2.5 bg-[#6f4f37] text-white hover:bg-[#593e2a] text-[13px] font-medium rounded-[3px] shadow transition-colors flex items-center"
                >
                  <span>Book Free Survey for this spec</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-[3px] transition-all ${
                selectedCategory === cat
                  ? 'bg-[#302722] text-[#f8f4ee]'
                  : 'bg-[#f8f4ee] text-[#4e433b] hover:bg-[#e6dfd2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Table (>768px) */}
        <div className="hidden md:block rounded-[6px] overflow-hidden border border-[#e1ddd7] bg-[#f8f4ee] shadow-sm mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#ede6dc] border-b border-[#e1ddd7] text-[12px] uppercase tracking-wider text-[#4e433b] font-semibold">
                <th className="py-4 px-6">Product &amp; Specification</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6 text-right">Supply /m²</th>
                <th className="py-4 px-6 text-right">Fitting /m²</th>
                <th className="py-4 px-6 text-right font-bold text-[#302722]">All in /m²</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e1ddd7]">
              {filteredPrices.map((row, index) => (
                <motion.tr
                  key={row.product}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="hover:bg-[#f3ede3] transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="font-semibold text-[#302722] text-[15px] group-hover:text-[#6f4f37] transition-colors flex items-center space-x-2">
                      <span>{row.product}</span>
                      {row.badge && (
                        <span className="text-[10px] font-medium font-sans px-2 py-0.5 rounded bg-[#eee8df] text-[#6f4f37] border border-[#e1ddd7]">
                          {row.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[12px] text-[#766f69] font-light mt-0.5">
                      {row.thickness}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[14px] text-[#4e433b]">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-right font-serif text-[17px] text-[#4e433b] tabular-nums">
                    £{row.supply}
                  </td>
                  <td className="py-4 px-6 text-right font-serif text-[17px] text-[#4e433b] tabular-nums">
                    £{row.fitting}
                  </td>
                  <td className="py-4 px-6 text-right font-serif text-[20px] font-medium text-[#6f4f37] tabular-nums">
                    <strong>£{row.total}</strong>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => onOpenSurveyWithProduct(row.product)}
                      className="px-3 py-1.5 text-[12px] font-medium text-[#6f4f37] hover:text-white hover:bg-[#6f4f37] rounded-[3px] border border-[#6f4f37]/40 hover:border-[#6f4f37] transition-colors inline-flex items-center"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Rows (<768px as specified in prompt) */}
        <div className="md:hidden space-y-3 mb-8">
          {filteredPrices.map((row, index) => (
            <motion.div
              key={row.product}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="bg-[#f8f4ee] p-4 rounded-[5px] border border-[#e1ddd7] shadow-sm space-y-2.5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-[#302722] text-[15px]">{row.product}</h4>
                  <p className="text-[12px] text-[#766f69]">{row.thickness}</p>
                </div>
                {row.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#eee8df] text-[#6f4f37]">
                    {row.badge}
                  </span>
                )}
              </div>

              {/* Stacked 3 lines as specified: supply, fit, and total */}
              <div className="pt-2 border-t border-[#e1ddd7] grid grid-cols-3 gap-2 text-center text-[13px]">
                <div className="bg-[#eee8df] p-2 rounded">
                  <span className="block text-[11px] text-[#766f69] uppercase">Supply</span>
                  <span className="font-serif text-[16px] text-[#302722] tabular-nums font-medium">
                    £{row.supply}/m²
                  </span>
                </div>
                <div className="bg-[#eee8df] p-2 rounded">
                  <span className="block text-[11px] text-[#766f69] uppercase">Fitting</span>
                  <span className="font-serif text-[16px] text-[#302722] tabular-nums font-medium">
                    £{row.fitting}/m²
                  </span>
                </div>
                <div className="bg-[#e9dfd1] p-2 rounded border border-[#6f4f37]/30">
                  <span className="block text-[11px] text-[#6f4f37] uppercase font-semibold">
                    All In
                  </span>
                  <span className="font-serif text-[17px] text-[#6f4f37] tabular-nums font-bold">
                    £{row.total}/m²
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenSurveyWithProduct(row.product)}
                className="w-full mt-2 py-2 bg-[#f4eee5] hover:bg-[#6f4f37] text-[#302722] hover:text-white border border-[#e1ddd7] rounded text-[13px] font-medium transition-colors flex items-center justify-center space-x-1"
              >
                <span>Select for Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Extras Callout Box */}
        <div className="p-6 rounded-[6px] bg-[#f8f4ee] border border-[#e1ddd7]">
          <div className="flex items-center space-x-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-[#678367]" />
            <h3 className="text-[15px] font-semibold text-[#302722]">
              Transparent Extras (Listed Separately, Never Hidden)
            </h3>
          </div>

          <p className="text-[14px] text-[#4e433b] font-light leading-relaxed mb-4">
            Underlay £6 to £14/m² depending on type · Self-levelling compound £18/m² where needed ·
            Uplift and disposal of existing floor £8/m² · Beading and thresholds from £12 per metre
            · Furniture moving, free
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-3 border-t border-[#e1ddd7]">
            {priceExtras.map((extra) => (
              <div key={extra.item} className="bg-[#eee8df]/70 p-3 rounded border border-[#e1ddd7]">
                <div className="text-[12px] font-medium text-[#766f69]">{extra.item}</div>
                <div className="font-serif text-[16px] font-medium text-[#302722] mt-0.5">
                  {extra.cost}
                </div>
                <div className="text-[11px] text-[#766f69] mt-1 leading-snug">{extra.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
