import React, { useState } from 'react';
import { X, Check, PackageCheck } from 'lucide-react';
import { finishes } from '../data/flooringData';
import confetti from 'canvas-confetti';

interface SamplePackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplePackModal: React.FC<SamplePackModalProps> = ({ isOpen, onClose }) => {
  const [selectedSamples, setSelectedSamples] = useState<string[]>(['oak-natural', 'herringbone']);
  const [name, setName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const toggleSample = (id: string) => {
    if (selectedSamples.includes(id)) {
      setSelectedSamples(selectedSamples.filter((x) => x !== id));
    } else {
      if (selectedSamples.length < 3) {
        setSelectedSamples([...selectedSamples, id]);
      }
    }
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    confetti({
      particleCount: 50,
      spread: 55,
      colors: ['#6f4f37', '#678367', '#d6b88d'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#302722]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#f8f4ee] rounded-[6px] border border-[#e1ddd7] shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#766f69] hover:text-[#302722] rounded bg-[#eee8df]"
        >
          <X className="w-5 h-5" />
        </button>

        {isOrdered ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-[#678367] text-white rounded-full flex items-center justify-center mx-auto">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="h2-editorial text-[#302722] text-[24px]">
              Sample Pack Dispatched
            </h3>
            <p className="text-[14px] text-[#4e433b] leading-relaxed max-w-sm mx-auto">
              Thank you, {name}! Your 3 tactile timber swatches are packed in eco-friendly cardboard
              and will arrive at {postcode} in 2 business days via Royal Mail.
            </p>
            <button
              onClick={() => {
                setIsOrdered(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#6f4f37] text-white rounded-[3px] text-[13px] font-medium"
            >
              Back to Grainhouse
            </button>
          </div>
        ) : (
          <form onSubmit={handleOrder} className="space-y-5">
            <div>
              <span className="eyebrow text-[10px] text-[#6f4f37]">FREE POSTAL SAMPLES</span>
              <h3 className="text-[22px] font-serif text-[#302722] mt-1">
                Order up to 3 Floor Swatches
              </h3>
              <p className="text-[13px] text-[#766f69] mt-1">
                Delivered free of charge across Nottingham and the East Midlands. Experience the real
                grain under your home's own light.
              </p>
            </div>

            {/* Swatches selection */}
            <div>
              <div className="flex justify-between text-[12px] text-[#4e433b] mb-2 font-medium">
                <span>Select finishes ({selectedSamples.length}/3 chosen):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {finishes.map((f) => {
                  const isChecked = selectedSamples.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleSample(f.id)}
                      className={`p-2.5 rounded-[4px] border text-left flex items-center space-x-2.5 transition-all ${
                        isChecked
                          ? 'bg-[#eee8df] border-[#6f4f37] ring-1 ring-[#6f4f37]'
                          : 'bg-[#f8f4ee] border-[#e1ddd7] hover:bg-[#eee8df]'
                      }`}
                    >
                      <div
                        className="w-7 h-7 rounded-[3px] shrink-0 border border-black/10"
                        style={{ background: f.swatchTexture, backgroundColor: f.swatchColor }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium text-[#302722] truncate">
                          {f.name}
                        </div>
                        <div className="text-[11px] text-[#766f69] truncate">{f.category}</div>
                      </div>
                      {isChecked && <Check className="w-4 h-4 text-[#6f4f37] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Delivery address details */}
            <div className="space-y-3 pt-2 border-t border-[#e1ddd7]">
              <div>
                <label className="block text-[12px] font-medium text-[#302722] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-[#eee8df]/70 border border-[#e1ddd7] rounded-[3px] px-3 py-2 text-[13px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-[#302722] mb-1">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="e.g. NG2 5BB"
                    className="w-full bg-[#eee8df]/70 border border-[#e1ddd7] rounded-[3px] px-3 py-2 text-[13px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-[#302722] mb-1">
                    First Line of Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 14 Elm Grove"
                    className="w-full bg-[#eee8df]/70 border border-[#e1ddd7] rounded-[3px] px-3 py-2 text-[13px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={selectedSamples.length === 0}
              className="w-full py-3 bg-[#6f4f37] hover:bg-[#593e2a] text-white text-[14px] font-medium rounded-[3px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow"
            >
              Order Free Swatches (Zero Shipping Fee)
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
