/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../../components/layout"
import Divider from "../../elements/divider"
import Seo from "../../components/seo"
import Content from "../../elements/content"
import Inner from '../../elements/inner'
import ProjectCard from "../../components/project-card"
import Contact from "../../components/contact"
import Nav from "../../components/nav/nav"
import Svg from "../../components/svg"
import { UpDown, UpDownWide } from "../../styles/animations"



const PortfolioPage = ({ data }) => {
  const portfolios = data.allStrapiPortfolio.edges

  return (
    <Layout>
      <Nav />
      <Parallax pages={2}>
        <Divider speed={0.2} offset={0} factor={1}>
            <UpDown>
              <Svg
                icon="triangle"
                hiddenMobile
                width={48}
                stroke
                color="icon_orange"
                left="10%"
                top="20%"
              />
              <Svg
                icon="hexa"
                width={48}
                stroke
                color="icon_red"
                left="60%"
                top="70%"
              />
              <Svg
                icon="box"
                width={6}
                color="icon_darker"
                left="60%"
                top="15%"
              />
            </UpDown>
            <UpDownWide>
              <Svg
                icon="arrowUp"
                hiddenMobile
                width={16}
                color="icon_blue"
                left="80%"
                top="10%"
              />
              <Svg
                icon="triangle"
                width={12}
                stroke
                color="icon_brightest"
                left="90%"
                top="50%"
              />
              <Svg
                icon="circle"
                width={16}
                color="icon_darker"
                left="70%"
                top="90%"
              />
              <Svg
                icon="triangle"
                width={16}
                stroke
                color="icon_darkest"
                left="30%"
                top="65%"
              />
              <Svg
                icon="cross"
                width={16}
                stroke
                color="icon_pink"
                left="28%"
                top="15%"
              />
              <Svg
                icon="circle"
                width={6}
                color="icon_darkest"
                left="75%"
                top="10%"
              />
              <Svg
                icon="upDown"
                hiddenMobile
                width={8}
                color="icon_darkest"
                left="45%"
                top="10%"
              />
            </UpDownWide>
            <Svg
              icon="circle"
              hiddenMobile
              width={24}
              color="icon_darker"
              left="5%"
              top="70%"
            />
            <Svg
              icon="circle"
              width={6}
              color="icon_darkest"
              left="4%"
              top="20%"
            />
            <Svg
              icon="circle"
              width={12}
              color="icon_darkest"
              left="50%"
              top="60%"
            />
            <Svg
              icon="upDown"
              width={8}
              color="icon_darkest"
              left="95%"
              top="90%"
            />
            <Svg
              icon="upDown"
              hiddenMobile
              width={24}
              color="icon_darker"
              left="40%"
              top="80%"
            />
            <Svg
              icon="triangle"
              width={8}
              stroke
              color="icon_darker"
              left="25%"
              top="5%"
            />
            <Svg
              icon="circle"
              width={64}
              color="icon_green"
              left="95%"
              top="5%"
            />
            <Svg
              icon="box"
              hiddenMobile
              width={64}
              color="icon_purple"
              left="5%"
              top="90%"
            />
            <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
            <Svg
              icon="box"
              width={12}
              color="icon_darkest"
              left="40%"
              top="30%"
            />
            <Svg
              icon="hexa"
              width={16}
              stroke
              color="icon_darker"
              left="10%"
              top="50%"
            />
            <Svg
              icon="hexa"
              width={8}
              stroke
              color="icon_darker"
              left="80%"
              top="70%"
            />
        </Divider>
        <Content speed={0.4} offset={0} factor={1}>
          <Inner>
              <h1
                // style={
                //   { color: isDark ? "white" : "black" }
                // } 
                sx={{
                  variant: "styles.h1"
                }}
              >
                Portfolio
              </h1>
            <div
              sx={{
                display: `grid`,
                gridGap: [4, 4, 4, 5],
                gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
                h2: { gridColumn: `-1/1`, color: `white !important` },
              }}
            >
              {portfolios.map((portfolio) => (
                <ProjectCard
                  key={portfolio.node.id}
                  link={`/portfolio/${portfolio.node.id}`}
                  title={portfolio.node.title}
                  bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                  category={portfolio.node.portfolio_categories[0]?.name}
                >
                  {/* {portfolio.description.data.description} */}
                </ProjectCard>
                ))
              }
            </div>
          </Inner>
        </Content>
        <Contact offset={1} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default PortfolioPage



export const query = graphql`
  query {
    allStrapiPortfolio {
      edges {
        node {
          id
          title
          image {
            height
            url
            width
          }
          description {
            data {
              description
              id
            }
          }
          portfolio_categories {
            name
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="portfolio" />
