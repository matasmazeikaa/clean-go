import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import HowCleaningImage from "./subpage/HowCleaningImage"
import Biuras from "@/images/biuras.png"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import {
  CLEANING_SERVICE_BIURO_VALYMAS,
  SIMPLE_CLEANING_POINTS,
} from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const BiuruValymas = () => (
  <main>
    <Seo
      title="Biurų valymas - patalpų valymo paslaugos"
      description="Mes teikiame aukščiausios kokybės biurų valymo paslaugas. Patikrinkite, kaip mes galime pagerinti jūsų biuro higieną."
    />
    <SubpageHeroSection
      title="Biurų valymas"
      service={CLEANING_SERVICE_BIURO_VALYMAS}
    />
    <HowCleaningImage
      title="Kaip atliekamas Biuro valymas"
      img={Biuras}
      alt="kaip atliekamas biuro valymas"
    />
    <WhatsIncludedSection
      title="Biuro valymo darbai"
      inlusions={SIMPLE_CLEANING_POINTS}
      service={CLEANING_SERVICE_BIURO_VALYMAS}
    />
    <OurWork />
    <PricingSection startingService={CLEANING_SERVICE_BIURO_VALYMAS} />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default BiuruValymas
