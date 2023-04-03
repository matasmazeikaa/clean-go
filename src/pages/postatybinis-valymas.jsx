import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import { CLEANING_TYPE_POSTATYBINIS } from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import HowCleaningDonePostatybinis from "./subpage/HowCleaningDonePostatybinis"
import Seo from "@/components/Seo"

const POSTATYBINIO_VALYMO_DARBAI = [
  "✔ Statybinių medžiagų likučių (dažų, glaistų, gruntų ir kt.) išvalymas",
  "✔ Statybinių dulkių šluostymas nuo visų paviršių",
  "✔ Grindų siurbimas, plovimas",
  "✔ Smulkių statybinių šiukšlių surinkimas, išnešimas į kliento nurodytą vietą",
  "✔ Langų bei tarpulangių ir stiklinių pertvarų valymas",
]

const PostatybinisValymasPage = () => (
  <main>
    <Seo
      title="Profesionalus postatybinis valymas"
      description="Mes teikiame profesionalų postatybinio valymo paslaugas, kurios padės jums išvalyti patalpas nuo statybos dulkių likučių. Kreipkitės į mus ir mes su malonumu jums padėsime."
    />
    <SubpageHeroSection
      title="Postatybinis valymas"
      service={CLEANING_TYPE_POSTATYBINIS}
    />
    <HowCleaningDonePostatybinis />
    <WhatsIncludedSection
      inlusions={POSTATYBINIO_VALYMO_DARBAI}
      title="Kas įeina į postatybinį valymą?"
      service={CLEANING_TYPE_POSTATYBINIS}
    />
    <OurWork />
    <PricingSection startingCleaningType={CLEANING_TYPE_POSTATYBINIS} />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default PostatybinisValymasPage
