
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-noto bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="bg-white/70">
        <ServicesSection />
      </div>
      <div className="bg-slate-50/80">
        <AboutSection />
      </div>
      <div className="bg-white/70">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
