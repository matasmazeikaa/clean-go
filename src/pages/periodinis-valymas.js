import * as React from "react"

import Layout from "../components/layout"
import HeroSeo from "./landing/HeroSeo"

const IndexPage = () => (
  <Layout isHeaderVisible={false}>
    <HeroSeo title="Periodinis valymas" infoParagraph="Periodiškai atliekant butų ir namų patalpų valymą, visada džiaugsitės švara ir komfortu. Palikite valymo rūpesčius mūsų rankose, o mes Jums leisime džiaugtis švaria aplinka.
Darbuotojai atvyks iš anksto su Jumis suderintu laiku su visomis reikalingomis darbo priemonėmis bei įrankiais.
" />
  </Layout>
)

export default IndexPage
