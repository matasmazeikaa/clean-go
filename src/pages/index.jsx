import React from "react"
import HeroSection from "@/pages/index/HeroSection"
import WhyUsSection from "./index/WhyUsSection"
import ServicesSection from "./index/ServicesSection"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import QuestionsSection from "./index/QuestionsSection"
import Footer from "@/components/Footer"
import Seo from "@/components/Seo"

const IndexPage = () => (
  <main>
    <Seo />
    <HeroSection />
    <WhyUsSection />
    <ServicesSection />
    <PricingSection />
    <TestimonialsSection />
    <QuestionsSection />
    <Footer />
  </main>
)

export default IndexPage
