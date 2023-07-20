import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {pageNation} from '../../components/pageNation/pageNation.module.scss'
import {
  detailsPage,
  headLine,
  title,
  contentWrap
} from './detailsPage.module.scss'

const PortfolioDetails = ({ data, pageContext }) => {
  const portfolio = data.allStrapiPortfolio.edges[0].node
  const childMarkdownRemark = portfolio.description.data.childMarkdownRemark
  console.log(portfolio);

  // 他のポートフォリオへのリンク
  const previousId = pageContext.previousId
  const nextId = pageContext.nextId

  // StrapiサーバーのURLを取得
  const strapiServerUrl = process.env.STRAPI_SERVER_URL;

  // 画像パスの置換と改行の置換
  const updatedHtml = childMarkdownRemark.html.replace(/src="\/uploads\//g, `src="${strapiServerUrl}/uploads/`).replace(/\n/g, "<br>");


  return (
    <Layout>
      <Seo title={portfolio.title} />
        <div className={detailsPage}>
          <div className={headLine}>
            <p className={title}>Portfolio</p>
          </div>

          <div className={contentWrap} style={{paddingTop:40}}>
            <h2 style={{fontSize:30,fontWeight:'bold'}}>{portfolio.title}</h2>
            {/* {image && <GatsbyImage image={image} alt={portfolio.title} />} */}
            <div style={{paddingTop:20}} dangerouslySetInnerHTML={{ __html: updatedHtml }} /> {/* 修正後のHTMLを表示 */}
          </div>

          <div className={pageNation}>
            {/* 前のポートフォリオへのリンク */}
            {previousId ?
              <Link to={`/portfolio/${previousId}`}>prev</Link>
              :
              <span></span>
            }

              <Link to="/portfolio">一覧へ</Link>

            {/* 次のポートフォリオへのリンク */}
            {nextId ?
              <Link to={`/portfolio/${nextId}`}>next</Link>
              :
              <span></span>
            }
          </div>

        </div>

    </Layout>
  )
}

export default PortfolioDetails

export const query = graphql`
  query ($id: String) {
    allStrapiPortfolio(filter: {id: {eq: $id}}) {
      edges {
        node {
          title
          description {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`
