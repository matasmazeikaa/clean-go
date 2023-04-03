import React from "react"
import PricingSection from "./index/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Footer from "@/components/Footer"
import SubpageHeroSection from "./subpage/SubpageHeroSection"
import PatalpuDezinfekavimas from "@/images/dezinfekavimas.jpeg"
import {
  CLEANING_TYPE_PATALPU_DEZINFEKAVIMAS,
  CLEANING_TYPE_PERIODINIS,
} from "@/constants/navigation-constants"
import Container from "@/components/Container"
import Section from "@/components/Section"
import "./patalpu-dezinfekavimas.scss"
import Seo from "@/components/Seo"

const PatalpuDezinfekavimasPage = () => (
  <main>
    <Seo
      title="Profesionalus patalpų dezinfekavimas"
      description="Mes teikiame profesionalų patalpų dezinfekavimo paslaugas, kurios padės jums apsisaugoti nuo virusų ir bakterijų. Kreipkitės į mus ir mes su malonumu jums padėsime."
    />
    <SubpageHeroSection
      title="Patalpų dezinfekavimas"
      service={CLEANING_TYPE_PERIODINIS}
    />
    <Container>
      <Section>
        <h2 className="h2 default-section-title-mb">
          Patalpų dezinfekavimo informacija
        </h2>
        <div className="subtext-maxwidth default-section-header-mb">
          <p className="body-2">
            Atvykstame pagal iškvietimą operatyviam patalpų dezinfekavimui
            prevenciškai arba esant tikimybei, kad patalpose yra SARS-CoV-2
            (2019-nCoV) virusas.
          </p>
          <br />
          <p className="body-2">
            Reaguojame per 24 val. ir patalpas dezinfekuojame su dezinfekantu,
            pagamintu pagal Pasaulio sveikatos organizacijos rekomenduojamą
            formulę.
          </p>
          <br />
          <p className="body-2">
            Paslaugą teikiame tiek valstybinėms įstaigoms, tiek daugiabučių namų
            bendrijoms, tiek verslui ar privatiems asmenims.
          </p>
          <br />
          <p className="body-2">
            Galime dezinfekuoti įvairaus tipo patalpas bet kuriuo paros metu.
          </p>
        </div>
        <img
          src={PatalpuDezinfekavimas}
          className="dezinfekavimas-img"
          alt="patalpų dezinfekavimo komanda"
        />
      </Section>
    </Container>
    <PricingSection
      startingCleaningType={CLEANING_TYPE_PATALPU_DEZINFEKAVIMAS}
    />
    <TestimonialsSection />
    <Footer />
  </main>
)

export default PatalpuDezinfekavimasPage
