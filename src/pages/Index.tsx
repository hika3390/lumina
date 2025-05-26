
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
      <div className="bg-white/60 backdrop-blur-sm">
        <ServicesSection />
      </div>
      <div className="bg-slate-50/80 backdrop-blur-sm">
        <AboutSection />
      </div>
      <div className="bg-white/60 backdrop-blur-sm">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
