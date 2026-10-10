import { LanguageProvider } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Specialist } from '@/components/Specialist';
import { PatientStat } from '@/components/PatientStat';
import { InternationalContact } from '@/components/InternationalContact';
import { Testimonials } from '@/components/Testimonials';
import { BookingWidget } from '@/components/BookingWidget';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function LandingPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-clay-50 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialist />
        <PatientStat />
        <InternationalContact />
        <Testimonials />
        <BookingWidget />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
