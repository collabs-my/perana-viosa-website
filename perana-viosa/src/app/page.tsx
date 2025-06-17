import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { SocialProofSection } from "@/components/sections/social-proof";
import TeamSection from "@/components/sections/team";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="services">
          <SolutionSection />
        </section>
        <section id="results">
          <SocialProofSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="cta">
          <FinalCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
