import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import HowCleaningImage from "./subpage/HowCleaningImage"
import Warehouse from "@/images/warehouse.png"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import {
  CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
  SIMPLE_CLEANING_POINTS,
} from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const BiuruValymas = () => (
  <main>
    <Seo
      title="Patikimas sandeliavimo patalpų valymas"
      description="Mes teikiame patikimas ir efektyvias sandeliavimo patalpų valymo paslaugas."
    />
    <SubpageHeroSection
      title="Sandeliavimo patalpų valymas"
      service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
    />
    <HowCleaningImage
      title="Kaip atliekamas Sandeliavimo patalpų valymas"
      img={Warehouse}
      alt="sandeliavimo patalpų valymas"
    />
    <WhatsIncludedSection
      title="Sandeliavimo patalpų valymo darbai"
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

export default BiuruValymas
