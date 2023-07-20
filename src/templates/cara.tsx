import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Portfolio from "../components/project"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../components/seo"
import Nav from "../components/nav/nav"


const Cara = () => (
  <Layout>
      <Nav speed={0} offset={1} factor={1}/>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Portfolio offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
