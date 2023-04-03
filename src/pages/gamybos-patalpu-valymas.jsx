import React from "react"
import HeroSection from "@/pages/index/HeroSection"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const GamybosPatalpuValymas = () => (
  <main>
    <Seo
      title="Gamybos patalpų valymas - patalpų valymo paslaugos"
      description="Mes teikiame aukščiausios kokybės gamybos patalpų valymo paslaugas. Patikrinkite, kaip mes galime pagerinti jūsų gamybos patalpų higieną."
    />
    <HeroSection />
    <OurWork />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default GamybosPatalpuValymas
