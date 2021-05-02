import * as React from "react"

import Layout from "../components/layout"
import Hero from './landing/Hero.js';
import LandingSection2 from './landing/LandingSection2';
import LandingSection3 from './landing/LandingSection3';
import LandingSection4 from './landing/LandingSection4';
import LandingSection5 from "./landing/LandingSection5"
import LandingSection6 from "./landing/LandingSection6"

const IndexPage = () => (
  <Layout isHeaderVisible={false}>
    <Hero />
    <LandingSection2 />
    <LandingSection3 />
    <LandingSection4 />
    <LandingSection5 />
    <LandingSection6 />
  </Layout>
)

export default IndexPage
