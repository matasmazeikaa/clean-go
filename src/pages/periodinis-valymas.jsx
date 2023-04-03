import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import HowCleaningDone from "./subpage/HowCleaningDone"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import { CLEANING_TYPE_PERIODINIS } from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const PERIODINIS_VALYMO_DARBAI = [
  "✔ Šiukšlių surinkimas, išnešimas, šiukšlių dėžių valymas ir dezinfekavimas, šiukšlių maišelių keitimas",
  "✔ Šviestuvų valymas pasiekiamame aukštyje",
  "✔ Gartraukio paviršinis valymas (neįsisenėjusio purvo, riebalų ir pan.)",
  "✔ Stalviršių ir kitų virtuvės paviršių valymas",
  "✔ Santechnikos įrangos (praustuvo, kriauklės, klozeto, vonios/dušo/garo kabinos, bidė valymas, vandens maišytuvų) nukalkinimas, dezinfekavimas",
  "✔ Kiliminės dangos siurbimas sausuoju būdu",
  "✔ Veidrodžių valymas",
  "✔ Grindų valymas",
  "✔ Dulkių valymas",
]

const PeriodinisValymasPage = () => (
  <main>
    <Seo
      title="Periodinis valymas"
      description=" teikiame periodinio valymo paslaugas, kurios padės jums išlaikyti jūsų patalpas tvarkingas ir švarias. Kreipkitės į mus ir mes su malonumu jums padėsime."
    />
    <SubpageHeroSection
      title="Periodinis valymas"
      service={CLEANING_TYPE_PERIODINIS}
    />
    <HowCleaningDone title="Kaip atliekamas namų valymas?" />
    <WhatsIncludedSection
      inlusions={PERIODINIS_VALYMO_DARBAI}
      title="Kas įeina į periodinį valymą?"
      service={CLEANING_TYPE_PERIODINIS}
    />
    <OurWork />
    <PricingSection startingCleaningType={CLEANING_TYPE_PERIODINIS} />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default PeriodinisValymasPage
