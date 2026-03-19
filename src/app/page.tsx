import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import ProblemFrame from "@/components/sections/ProblemFrame";
import SolutionFrame from "@/components/sections/SolutionFrame";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import Testimonials from "@/components/sections/Testimonials";
import ScreenshotProof from "@/components/sections/ScreenshotProof";
import TechStack from "@/components/sections/TechStack";
import FounderSection from "@/components/sections/FounderSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import { sanityClient, isSanityConfigured, queries } from "@/utils/sanityClient";
import {
  fallbackCaseStudies,
  fallbackTestimonials,
} from "@/data/fallback";

async function getData() {
  if (!isSanityConfigured) {
    return {
      caseStudies: fallbackCaseStudies,
      testimonials: fallbackTestimonials.slice(0, 2),
    };
  }

  try {
    const [caseStudies, testimonials] = await Promise.all([
      sanityClient.fetch(queries.featuredCaseStudies),
      sanityClient.fetch(queries.featuredTestimonials),
    ]);

    return {
      caseStudies: caseStudies?.length ? caseStudies : fallbackCaseStudies,
      testimonials: testimonials?.length
        ? testimonials
        : fallbackTestimonials.slice(0, 2),
    };
  } catch {
    return {
      caseStudies: fallbackCaseStudies,
      testimonials: fallbackTestimonials.slice(0, 2),
    };
  }
}

export default async function Home() {
  const { caseStudies, testimonials } = await getData();

  return (
    <>
      <Navbar />
      <main id="main-content">
      <Hero />
      <ProofStrip />
      <ProblemFrame />
      <SolutionFrame />
      <BeforeAfter />
      <Process />
      <Services />
      <CaseStudyPreview data={caseStudies} />
      <Testimonials data={testimonials} />
      <ScreenshotProof />
      <TechStack />
      <FounderSection />
      <FAQ />
      <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
