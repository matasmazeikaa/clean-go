import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import HowCleaningImage from "./subpage/HowCleaningImage"
import Parduotuve from "@/images/parduotuve.png"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import {
  CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
  SIMPLE_CLEANING_POINTS,
} from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const ParduotuviuValymas = () => (
  <main>
    <Seo
      title="Kokybiškas parduotuvių valymas"
      description="Mes teikiame kokybiškas ir patikimas parduotuvių valymo paslaugas. Susisiekite su mumis ir mūsų komanda jumis pasirūpins."
    />
    <SubpageHeroSection
      title="Parduotuvių valymas"
      service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
    />
    <HowCleaningImage
      title="Kaip atliekamas parduotuvės patalpų valymas"
      img={Parduotuve}
      alt="parduotuvės valymas"
    />
    <WhatsIncludedSection
      title="Parduotuvės patalpų valymo darbai"
      inlusions={SIMPLE_CLEANING_POINTS}
      service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
    />
    <OurWork />
    <PricingSection
      startingService={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
    />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default ParduotuviuValymas
