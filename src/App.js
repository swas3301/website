import React from "react";
import "@/App.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AboutSection, SkillsSection, ProjectsSection } from "@/components/ContentSections";
import { ContactSection, Footer } from "@/components/ContactFooter";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App dark" style={{ background: '#000', minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
