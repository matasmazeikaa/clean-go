import React from "react"
import Layout from "../components/layout"
import CarrierSection from "../components/CarrierSection"

const JOB_OFFERS = [
  {
    title: "Namų tvarkytoja",
    requirements: [
      "Moterys 25 iki 50 metų.",
      "Darbšti ir sąžininga. Patirtis valymo srityje-privalumas, jeigu jo nėra mes viskuo Jus apmokisime.",
      "B kategorijos pažymėjimas",
    ],
    jobType: "Namų, butu, kotedžu valymas Vilniaus mieste ir aplink",
    whatYouGet: [
      "Konkurencinga atlyginimą",
      "Lankstus darbo grafikas (galima dirbti ne pilnu etatu)",
      "Draugiškas kolektyvas",
    ],
  },
]

const Karjera = () => {
  return (
    <Layout>
      <CarrierSection jobOffers={JOB_OFFERS}/>
    </Layout>
  )
}

export default Karjera
