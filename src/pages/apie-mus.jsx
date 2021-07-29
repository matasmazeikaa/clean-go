import React from "react"
import Section from "../components/Section"
import Layout from "../components/layout"
import './AboutUs.scss';

const ApieMus = () => {
  return (
    <Layout>
      <div className="about-us">
        <Section>
          <h1 className="about-us__title">Apie mus</h1>
          <p className="about-us__info">
            “CLEANGO” švaros profesionalų komanda Vilniaus mieste siūlo Jums kokybiškas valymo paslaugas, kad Jūsų namai,
            butai ar komercinių patalpų švara atspindėtų Jūsų įvaizdį. Mes esame pasirengę susidoroti su bet kokiu valymo
            iššūkiu, todėl pasiūlysime Jums tinkamiausią variantą.
            Mūsų komandos tikslas - užtikrinti valymo paslaugų kokybę bei darbų nuoseklumą, kad suteiktos paslaugos ir
            darbų vykdymo sprendimai patenkintų mūsų kliento poreikius.
            Mes vertiname kiekvieną savo klientą ir stengiamės patenkinti visus kliento lūkesčius, o geriausias
            įvertinimas mums - tapti patikimu Jūsų partneriu.
            Pasikliaukite mumis ir mes padovanosime Jums ne tik švarą, bet ir geras emocijas.
          </p>
        </Section>
      </div>
      <div className=""about/>
    </Layout>
  )
}

export default ApieMus
