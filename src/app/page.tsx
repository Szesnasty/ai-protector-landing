import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ModelCompare } from "@/components/sections/ModelCompare";
import { Hook } from "@/components/sections/Hook";
import { Baseline } from "@/components/sections/Baseline";
import { PinnedFlow } from "@/components/sections/PinnedFlow";
import { RedTeam } from "@/components/sections/RedTeam";
import { Protect } from "@/components/sections/Protect";
import { Prove } from "@/components/sections/Prove";
import { CtaBand } from "@/components/sections/CtaBand";
import { Governance } from "@/components/sections/Governance";
import { Philosophy } from "@/components/sections/Philosophy";
import { Numbers } from "@/components/sections/Numbers";
import { PinnedWizard } from "@/components/sections/PinnedWizard";
import { WhoFor } from "@/components/sections/WhoFor";
import { Deploy } from "@/components/sections/Deploy";
import { About } from "@/components/sections/About";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <PinnedFlow />
        <Hook />
        <ModelCompare />
        <Baseline />
        <RedTeam />
        <Protect />
        <Prove />
        <CtaBand />
        <Governance />
        <Philosophy />
        <Numbers />
        <PinnedWizard />
        <WhoFor />
        <Deploy />
        <About />
        <Closing />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
