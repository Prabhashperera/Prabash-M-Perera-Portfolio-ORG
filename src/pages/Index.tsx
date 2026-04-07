import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import CreatorSection from "@/components/CreatorSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <CreatorSection />
      <ContactSection />
    </div>
  );
};

export default Index;
