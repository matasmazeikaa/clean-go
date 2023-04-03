import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import OurWork1 from "@/images/kilimo-valymas-1.jpeg"
import OurWork2 from "@/images/kilimo-valymas-2.jpeg"
import OurWork3 from "@/images/our-work-2.png"
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection"
import {
  CLEANING_TYPE_CHEMINIS_VALYMAS,
  CLEANING_TYPE_PERIODINIS,
} from "@/constants/navigation-constants"
import OurWork from "@/components/sections/OurWork"
import Seo from "@/components/Seo"

const CHEMINIO_VALYMO_DARBAI = [
  "✔ Kavos, vyno, sulčių ir maisto dėmių valymas",
  "✔ Bakterijų ir nemalonių kvapų panaikinimas",
  "✔ Dulkių, plaukų, smėlio ir dulkių erkutčių valymas/naikinimas",
  "✔ Riebalo ir prakaito dėmių valymas",
  "✔ Kraujo, šlapimo ir vėmalų dėmių valymas",
  "✔ Naminių gyvūnų pėdsakų valymas",
  "✔ Rašalo, flomasterių ir kitų dėmių pašalinimas",
]

const OUR_WORK_IMAGES = [
  {
    img: OurWork1,
    alt: "dulkių, plaukų, smėlio ir dulkių erkutčių valymas naikinimas",
  },
  {
    img: OurWork2,
    alt: "dulkių, plaukų, smėlio ir dulkių erkutčių valymas naikinimas",
  },
  { img: OurWork3, alt: "rašalo, flomasterių ir kitų dėmių pašalinimas" },
]

const CheminisValymasPage = () => (
  <main>
    <Seo
      title="Cheminis baldu valymas - patalpų valymo paslaugos"
      description="Mes teikiame aukščiausios kokybės cheminio baldu valymo paslaugas. Patikrinkite, kaip mes galime atgaivinti jūsų baldus."
    />
    <SubpageHeroSection
      title="Cheminis baldų valymas"
      service={CLEANING_TYPE_PERIODINIS}
    />
    <WhatsIncludedSection
      inlusions={CHEMINIO_VALYMO_DARBAI}
      title="Kas įeina į cheminį baldų valymą?"
      service={CLEANING_TYPE_CHEMINIS_VALYMAS}
    />
    <OurWork
      service={CLEANING_TYPE_CHEMINIS_VALYMAS}
      workImages={OUR_WORK_IMAGES}
    />
    <PricingSection startingCleaningType={CLEANING_TYPE_CHEMINIS_VALYMAS} />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default CheminisValymasPage
