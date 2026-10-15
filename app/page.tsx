import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { StatsSection } from "@/components/stats-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { QuotesSection } from "@/components/quotes-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HistorySection />
      <StatsSection />
      <ManifestoSection />
      <QuotesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
