import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import HowCleaningImage from "./subpage/HowCleaningImage"
import SportoKlubas from "@/images/sporto-klubas.png"
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
      title="Sporto klubo valymas"
      description="Teikiame sporto klubų valymo paslaugas su aukščiausios kokybės įranga ir produktais. Išsami paslaugų ir kainų informacija jau čia. Susisiekite su mumis ir raskite idealų sprendimą jūsų sporto klubui."
    />
    <SubpageHeroSection
      title="Sporto klubų valymas"
      service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
    />
    <HowCleaningImage
      title="Kaip atliekamas sporto klubų valymas"
      img={SportoKlubas}
      alt="sporto klubo valymas"
    />
    <WhatsIncludedSection
      title="Sporto klubų valymo darbai"
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
