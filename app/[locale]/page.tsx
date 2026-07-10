import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Challenges } from "@/components/challenges";
import { Offers } from "@/components/offers";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { LeadMagnet } from "@/components/lead-magnet";
import { CTA } from "@/components/cta";
import { Steps } from "@/components/steps";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Challenges />
      <Offers />
      <Stats />
      <Testimonials />
      <LeadMagnet />
      <CTA />
      <Steps />
      <Footer />
    </main>
  );
}
