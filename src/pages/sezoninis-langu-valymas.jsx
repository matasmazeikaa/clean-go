import React from "react"
import HeroSection from "@/pages/index/HeroSection"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const GeneralinisValymasPage = () => (
  <main>
    <Seo
      title="Sezoninis langu valymas"
      description="Mes teikiame patikimas ir efektyvias sandeliavimo patalpų valymo paslaugas."
    />
    <HeroSection />
    <OurWork />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default GeneralinisValymasPage
