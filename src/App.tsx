import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomVisualiser } from './components/RoomVisualiser';
import { FloorTypes } from './components/FloorTypes';
import { PriceTable } from './components/PriceTable';
import { GrainStrip } from './components/GrainStrip';
import { SubfloorHonesty } from './components/SubfloorHonesty';
import { FittingProcess } from './components/FittingProcess';
import { CareGuarantees } from './components/CareGuarantees';
import { RecentProjects } from './components/RecentProjects';
import { SurveyForm } from './components/SurveyForm';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SamplePackModal } from './components/SamplePackModal';

export function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProductForSurvey, setSelectedProductForSurvey] = useState<string>('');

  const handleOpenSurvey = () => {
    const el = document.getElementById('survey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSurveyWithItem = (itemName: string) => {
    setSelectedProductForSurvey(itemName);
    const el = document.getElementById('survey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVisualiser = () => {
    const el = document.getElementById('visualiser');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4ee] text-[#302722] selection:bg-[#6f4f37] selection:text-[#f8f4ee]">
      {/* 1. Navbar */}
      <Navbar
        onOpenSurvey={handleOpenSurvey}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onOpenSurvey={handleOpenSurvey}
          onScrollToVisualiser={handleScrollToVisualiser}
        />

        {/* 3. Room Visualiser (Primary Interaction - Effect 1) */}
        <RoomVisualiser
          onOpenSurveyWithFinish={handleOpenSurveyWithItem}
          onOpenSampleModal={() => setSampleModalOpen(true)}
        />

        {/* 4. Floor Types (2x3 Cards with Honest Trade-Offs) */}
        <FloorTypes onOpenSurveyWithProduct={handleOpenSurveyWithItem} />

        {/* 5. Full Price List (Supply & Fitting per m² + Transparent Extras) */}
        <PriceTable onOpenSurveyWithProduct={handleOpenSurveyWithItem} />

        {/* 6. Grain Scroll Strip (Texture Parallax - Effect 2) */}
        <GrainStrip />

        {/* 7. Subfloor Honesty (Moisture readings & Levelling costs) */}
        <SubfloorHonesty onOpenSurvey={handleOpenSurvey} />

        {/* 8. Fitting Process (5 Steps + Acclimatisation Time) */}
        <FittingProcess />

        {/* 9. Care and Guarantees (25-Year wear guarantee & Steam Mop warning) */}
        <CareGuarantees />

        {/* 10. Recent Projects (3 Real East Midlands Homes) */}
        <RecentProjects onOpenSurveyWithProject={handleOpenSurveyWithItem} />

        {/* 11. Free Survey Booking Form */}
        <SurveyForm initialProductOrFinish={selectedProductForSurvey} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenSurvey={handleOpenSurvey}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Mobile Sticky Bar (<768px) */}
      <MobileStickyBar onOpenSurvey={handleOpenSurvey} />

      {/* Free Sample Pack Modal */}
      <SamplePackModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </div>
  );
}

export default App;
