import { Challenges } from "@/components/challenges";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LeadMagnet } from "@/components/lead-magnet";
import { Navbar } from "@/components/navbar";
import { Offers } from "@/components/offers";
import { MotionProvider } from "@/components/reveal";
import { Stats } from "@/components/stats";
import { Steps } from "@/components/steps";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Offers />
        <Stats />
        <Testimonials />
        <LeadMagnet />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </MotionProvider>
  );
}
