import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import MethodSection from "@/components/MethodSection";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <MethodSection />
      
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
