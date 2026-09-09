import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

interface SubfloorHonestyProps {
  onOpenSurvey: () => void;
}

export const SubfloorHonesty: React.FC<SubfloorHonestyProps> = ({ onOpenSurvey }) => {
  return (
    <section className="py-14 lg:py-22 bg-[#f8f4ee] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-2 text-[#6f4f37]">SUBFLOOR HONESTY</div>
            <h2 className="h2-editorial text-[#302722] mb-5">
              Why a quote can change once the old floor comes up
            </h2>

            <div className="space-y-4 text-[16.5px] text-[#4e433b] font-light leading-[1.8]">
              <p>
                Nobody knows what is under your existing floor, including us. Most of the time it is
                fine. Occasionally there is a screed that has cracked, boards that have rotted at the
                edges, or a level difference of twenty millimetres across a room that was hidden
                under carpet.
              </p>
              <p>
                We take moisture readings and check levels at the survey, which catches most of it.
                If something appears once we lift the old floor,{' '}
                <strong className="font-semibold text-[#302722]">
                  we stop, show you, and quote the additional work before continuing.
                </strong>{' '}
                We never carry on and invoice you at the end, and levelling compound at £18 a square
                metre is the most common surprise.
              </p>
            </div>

            {/* Three Strict Commitments */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#eee8df] p-4 rounded-[4px] border border-[#e1ddd7]">
                <div className="flex items-center space-x-2 text-[#302722] font-semibold text-[14px] mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#6f4f37] text-white flex items-center justify-center text-[11px] shrink-0">
                    1
                  </span>
                  <span>We Stop</span>
                </div>
                <p className="text-[12.5px] text-[#766f69] leading-snug">
                  Fitting halts the second an unforeseen subfloor issue is detected.
                </p>
              </div>

              <div className="bg-[#eee8df] p-4 rounded-[4px] border border-[#e1ddd7]">
                <div className="flex items-center space-x-2 text-[#302722] font-semibold text-[14px] mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#6f4f37] text-white flex items-center justify-center text-[11px] shrink-0">
                    2
                  </span>
                  <span>We Show You</span>
                </div>
                <p className="text-[12.5px] text-[#766f69] leading-snug">
                  You inspect the subfloor in person or via high-res video before any decision.
                </p>
              </div>

              <div className="bg-[#eee8df] p-4 rounded-[4px] border border-[#e1ddd7]">
                <div className="flex items-center space-x-2 text-[#302722] font-semibold text-[14px] mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#6f4f37] text-white flex items-center justify-center text-[11px] shrink-0">
                    3
                  </span>
                  <span>Fixed Quote</span>
                </div>
                <p className="text-[12.5px] text-[#766f69] leading-snug">
                  Written price before work resumes. Exactly £18/m² for levelling compound.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual: Diagnostic & Subfloor Cross-Section (5 cols) */}
          <div className="lg:col-span-5 bg-[#ede6dc] p-6 sm:p-7 rounded-[6px] border border-[#e1ddd7] shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-[#e1ddd7] pb-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-[#6f4f37]" />
                <h3 className="text-[15.5px] font-semibold text-[#302722]">
                  Survey Moisture &amp; Level Protocol
                </h3>
              </div>
              <span className="text-[11px] font-medium bg-[#678367]/15 text-[#678367] px-2 py-0.5 rounded whitespace-nowrap">
                Always Free
              </span>
            </div>

            {/* Visual Cross Section Diagram with non-clipping adaptive heights */}
            <div className="bg-[#f8f4ee] p-4 rounded-[4px] border border-[#e1ddd7] space-y-2">
              <div className="text-[11.5px] font-semibold text-[#302722] uppercase tracking-wider mb-1.5">
                Subfloor Layer Cross-Section:
              </div>

              {/* Timber layer */}
              <div className="min-h-[32px] py-1.5 bg-[#a47e58] rounded text-[11px] text-white flex items-center justify-between px-3 font-medium">
                <span className="pr-2">Real Timber Plank / Herringbone</span>
                <span className="shrink-0 font-mono">14mm–18mm</span>
              </div>

              {/* Underlay / DPM */}
              <div className="min-h-[28px] py-1 bg-[#678367] rounded text-[10.5px] text-white flex items-center justify-between px-3">
                <span className="pr-2">Damp Proof Membrane (DPM) &amp; Acoustic Underlay</span>
                <span className="shrink-0 font-mono">2mm–5mm</span>
              </div>

              {/* Screed / Levelling compound */}
              <div className="min-h-[32px] py-1.5 bg-[#b8b0a5] rounded text-[11px] text-[#302722] flex items-center justify-between px-3 font-mono">
                <span className="pr-2">Self-Levelling Compound (if required)</span>
                <span className="shrink-0 font-bold">£18/m²</span>
              </div>

              {/* Concrete slab or joists */}
              <div className="min-h-[34px] py-1.5 bg-[#8a8074] rounded text-[11px] text-white flex items-center justify-between px-3">
                <span className="pr-2">Existing Concrete Base or Joists</span>
                <span className="shrink-0 font-mono">Tested 3 Locations</span>
              </div>
            </div>

            {/* Diagnostic readout table */}
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between items-center py-1.5 border-b border-[#e1ddd7]/70">
                <span className="text-[#4e433b] pr-2">Relative Humidity (RH) threshold</span>
                <span className="font-mono text-[#302722] font-medium shrink-0">&lt; 75% RH</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#e1ddd7]/70">
                <span className="text-[#4e433b] pr-2">Subfloor level tolerance (SR1)</span>
                <span className="font-mono text-[#302722] font-medium shrink-0">Max 2mm over 2m</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#4e433b] pr-2">Survey moisture testing</span>
                <span className="text-[#678367] font-medium shrink-0">Calibrated Protimeter</span>
              </div>
            </div>

            <button
              onClick={onOpenSurvey}
              className="w-full py-3 bg-[#6f4f37] hover:bg-[#593e2a] text-[#faf7f2] text-[14px] font-medium rounded-[3px] transition-colors flex items-center justify-center space-x-1.5 shadow"
            >
              <span>Book Survey with Subfloor Inspection</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
