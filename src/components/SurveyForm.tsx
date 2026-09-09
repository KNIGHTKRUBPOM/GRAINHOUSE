import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface SurveyFormProps {
  initialProductOrFinish?: string;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ initialProductOrFinish }) => {
  const [name, setName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phone, setPhone] = useState('');
  const [roomCount, setRoomCount] = useState('1');
  const [roughArea, setRoughArea] = useState('32');
  const [currentFloor, setCurrentFloor] = useState('Carpet');
  const [preferredDate, setPreferredDate] = useState('Morning (9am - 12pm)');
  const [notes, setNotes] = useState(initialProductOrFinish ? `Interested in: ${initialProductOrFinish}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialProductOrFinish) {
      setNotes((prev) => (prev ? `${prev} · Focus: ${initialProductOrFinish}` : `Interested in: ${initialProductOrFinish}`));
    }
  }, [initialProductOrFinish]);

  const floorOptions = [
    'Carpet',
    'Old Floorboards',
    'Concrete Screed',
    'Tiles / Ceramics',
    'Laminate / LVT',
    'Mixed / Not Sure',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#6f4f37', '#678367', '#d6b88d', '#f8f4ee'],
      });
    }, 600);
  };

  return (
    <section id="survey" className="py-16 lg:py-24 bg-[#f8f4ee] border-b border-[#e1ddd7] relative">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Reassurance, Moisture test note, and Honesty statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="eyebrow mb-2">FREE ON-SITE ASSESSMENT</div>
              <h2 className="h2-editorial text-[#302722] mb-4">
                Book a free survey with moisture test
              </h2>
              <p className="text-[17px] text-[#4e433b] font-light leading-[1.76]">
                We measure up, take calibrated moisture readings across the subfloor, and check
                surface levels. No high-pressure sales pitch.
              </p>
            </div>

            {/* Note from prompt */}
            <div className="p-5 rounded-[5px] bg-[#ede6dc] border border-[#e1ddd7] space-y-3">
              <div className="flex items-center space-x-2 text-[#6f4f37] font-semibold text-[14px]">
                <ShieldCheck className="w-4 h-4 text-[#678367]" />
                <span>Our Survey Pledge</span>
              </div>
              <p className="text-[14px] text-[#4e433b] font-light leading-relaxed italic">
                “The survey is genuinely free and there is no obligation. We will tell you if a
                cheaper product is the right one for the room, and we would rather do that than sell
                you walnut for a rental.”
              </p>
            </div>

            {/* What is included in the survey */}
            <div className="space-y-3 pt-2">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#766f69] block">
                What our surveyor brings:
              </span>
              <div className="space-y-2.5 text-[14px] text-[#4e433b]">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#678367] mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    <strong>Protimeter moisture readings</strong> in 3 locations per room
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#678367] mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    <strong>Laser level check</strong> to detect subfloor dips over 2mm
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#678367] mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    <strong>Physical plank samples</strong> to view in your room's natural daylight
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#678367] mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    <strong>Itemised written quote</strong> delivered within 2 working days
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Phone Support */}
            <div className="pt-4 border-t border-[#e1ddd7] flex items-center justify-between">
              <div>
                <span className="text-[12px] text-[#766f69] block">Prefer to talk right now?</span>
                <a
                  href="tel:01155550163"
                  className="font-serif text-[18px] text-[#302722] hover:text-[#6f4f37] font-medium"
                >
                  0115 555 0163
                </a>
              </div>
              <span className="text-[12px] text-[#766f69] bg-[#eee8df] px-3 py-1 rounded">
                Showroom Nottingham
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#ede6dc] p-6 sm:p-8 rounded-[6px] border border-[#e1ddd7] shadow-md">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-[#678367] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="h2-editorial text-[#302722] text-[28px]">
                  Thank You, {name || 'Neighbour'}
                </h3>
                <p className="text-[16px] text-[#4e433b] font-light max-w-md mx-auto leading-relaxed">
                  We have received your survey request for {postcode}. Our surveyor will contact you
                  at <span className="font-semibold text-[#302722]">{phone}</span> within 24 hours to confirm
                  the exact 40-minute appointment for {preferredDate}.
                </p>
                <div className="p-4 rounded bg-[#f8f4ee] border border-[#e1ddd7] text-[13px] text-[#766f69] max-w-md mx-auto text-left">
                  <div><strong>Rooms:</strong> {roomCount} room(s) · ~{roughArea} m²</div>
                  <div><strong>Current Subfloor:</strong> {currentFloor}</div>
                  <div><strong>Slot:</strong> {preferredDate}</div>
                  <div><strong>Moisture check:</strong> Included free of charge</div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[13px] text-[#6f4f37] font-medium hover:underline pt-4 block mx-auto"
                >
                  Submit another request or modify details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#e1ddd7]">
                  <h3 className="text-[18px] font-serif text-[#302722]">Book Your Survey</h3>
                  <span className="text-[12px] text-[#678367] font-medium flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#678367] mr-1.5" />
                    Zero obligation
                  </span>
                </div>

                {/* Name & Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#302722] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#f8f4ee] border border-[#e1ddd7] rounded-[3px] px-3.5 py-2.5 text-[14px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#302722] mb-1">
                      Nottingham / East Mids Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      placeholder="e.g. NG7 2GW"
                      className="w-full bg-[#f8f4ee] border border-[#e1ddd7] rounded-[3px] px-3.5 py-2.5 text-[14px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[13px] font-medium text-[#302722] mb-1">
                    Phone Number (for appointment confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07700 900123"
                    className="w-full bg-[#f8f4ee] border border-[#e1ddd7] rounded-[3px] px-3.5 py-2.5 text-[14px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                  />
                </div>

                {/* How many rooms & Rough area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#302722] mb-1">
                      How many rooms?
                    </label>
                    <div className="grid grid-cols-5 gap-1.5">
                      {['1', '2', '3', '4', '5+'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRoomCount(r)}
                          className={`py-2 text-[13px] font-medium rounded-[3px] border transition-colors ${
                            roomCount === r
                              ? 'bg-[#6f4f37] text-white border-[#6f4f37]'
                              : 'bg-[#f8f4ee] text-[#302722] border-[#e1ddd7] hover:bg-[#e2ded7]'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#302722] mb-1">
                      Rough area in m² if known
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="5"
                        max="500"
                        value={roughArea}
                        onChange={(e) => setRoughArea(e.target.value)}
                        placeholder="e.g. 35"
                        className="w-full bg-[#f8f4ee] border border-[#e1ddd7] rounded-[3px] px-3.5 py-2 text-[14px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                      />
                      <span className="absolute right-3 top-2.5 text-[12px] text-[#766f69]">
                        m²
                      </span>
                    </div>
                  </div>
                </div>

                {/* What is down at the moment */}
                <div>
                  <label className="block text-[13px] font-medium text-[#302722] mb-1.5">
                    What is down at the moment?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {floorOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setCurrentFloor(opt)}
                        className={`p-2 text-[12px] font-medium text-left rounded-[3px] border transition-colors flex items-center justify-between ${
                          currentFloor === opt
                            ? 'bg-[#6f4f37] text-white border-[#6f4f37]'
                            : 'bg-[#f8f4ee] text-[#4e433b] border-[#e1ddd7] hover:bg-[#e2ded7]'
                        }`}
                      >
                        <span className="truncate">{opt}</span>
                        {currentFloor === opt && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-1" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred time slot */}
                <div>
                  <label className="block text-[13px] font-medium text-[#302722] mb-1.5">
                    Preferred Survey Window:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-[12px]">
                    {['Morning (9am - 12pm)', 'Afternoon (12pm - 4pm)', 'Late (4pm - 6pm)'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredDate(slot)}
                        className={`p-2 rounded-[3px] border text-center font-medium transition-colors ${
                          preferredDate === slot
                            ? 'bg-[#6f4f37] text-white border-[#6f4f37]'
                            : 'bg-[#f8f4ee] text-[#4e433b] border-[#e1ddd7] hover:bg-[#e2ded7]'
                        }`}
                      >
                        {slot.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes or specific finishes */}
                <div>
                  <label className="block text-[13px] font-medium text-[#302722] mb-1">
                    Specific floors you’d like to see samples of (optional):
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Oak Herringbone and Natural Oak planks..."
                    className="w-full bg-[#f8f4ee] border border-[#e1ddd7] rounded-[3px] p-2.5 text-[13px] text-[#302722] focus:outline-none focus:border-[#6f4f37]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-[#6f4f37] hover:bg-[#593e2a] text-[#faf7f2] font-medium text-[15px] tracking-wide rounded-[3px] shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>{isLoading ? 'Booking...' : 'Book a Free Survey'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[12px] text-[#766f69] font-light">
                  Survey takes about 40 minutes · Includes 3 moisture readings · No sales pressure
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
