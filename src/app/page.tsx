import { Banner } from "@/components/Banner";
import { HeroSection } from "@/components/HeroSection";
import { ClassesSection } from "@/components/ClassesSection";
import { AboutSection } from "@/components/AboutSection";
import { CTACard } from "@/components/CTACard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner />
      <HeroSection />
      <ClassesSection />
      <AboutSection />
      <CTACard />
      <Footer />
    </main>
  );
}
