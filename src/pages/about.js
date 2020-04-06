import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Today you will leave here having learned four new things about me.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Obviously, I'm coding.</figcaption>
          </figure>
          <h3 id="dynamic-styles">
            Hello 👋 I'm Fatima Altaf. My Software Development skills are the
            way I like my pancakes: full stack. I graduated from Lighthouse Labs
            Web Development Bootcamp in January 2020.
          </h3>
          <h5>Here are four great things about me 😃:</h5>
          <ol>
            <li>
              <strong>I never give up:</strong> I never considered myself a
              person strong enough for STEM. In high school, I had Math and
              Chemistry teachers who discouraged me from further pursuing
              science and technology majors in University. I gravitated towards
              Political Science and I excelled. However, a part of me always
              wished I had fought harder for myself. In August of 2018, I took
              the opportunity to enroll in the Intro to Web Development course
              at Lighthouse Labs. This course was offered as part of a{" "}
              <a href="https://idrf.com/women-learn-code/">
                Women Learn to Code program (IDRF)
              </a>{" "}
              It was then I realized my potential to excel in Software
              Development. I convinced myself, "you can do this." Now I use my
              story as a teaching moment to motivate people to bring out the
              best in them.
            </li>
            <li>
              <strong>I have an analytical mindset:</strong> I completed six
              projects at Lighthouse Labs that took me through a range of
              tech-stacks like Node, Express, React, Ruby on Rails, EJS, and
              JQuery. I completed my{" "}
              <a href="https://github.com/fatimaaltaf/forget">
                capstone project
              </a>{" "}
              from ideation to completion in two weeks!
            </li>
            <li>
              <strong>There is no 'I' in team:</strong> My{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/sisterhood-softball-league-1.5167469">
                softball
              </a>{" "}
              team captain always stressed the importance of playing as a single
              unit. I played outfield and realized that even though the position
              did not get the most traction, I always had to bring my A-Game and
              back up my teammates. I apply this skill when working with others
              on projects.
            </li>
            <li>
              <strong>My communication skills are on point:</strong> Case in
              point – this list. I have written and presented for different
              audiences ({" "}
              <a href="https://ontariocampaign2000.ca/wp-content/uploads/2019/01/ONC2000_Pre-Budget-Submission-2019_Jan29.pdf">
                government
              </a>{" "}
              , community organizations, and the{" "}
              <a href="https://campaign2000.ca/wp-content/uploads/2018/11/C2000NationalEnglishReportCardNov2018.pdf">
                public
              </a>{" "}
              ). I've even made a few documentary films to convey the thoughts
              percolating in my head 💡:
              <ul>
                <li>
                  {" "}
                  <a href="https://www.youtube.com/watch?v=NpNUQGtdtek&t=564s">
                    Serving Others: Memoirs of Muslim Seniors
                  </a>{" "}
                  (Funded by a grant from the Government of Canada and made for
                  Muslim Seniors Circle)
                </li>
              </ul>
              To me writing for an array of audiences is similar to learning
              different tech-stacks.
            </li>
          </ol>
          <p>
            I decided to pursue to Software Development with the strong belief
            that I can impact the tech industry by creating products that
            break-barriers, are accessible, and user-friendly.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "fatima-altaf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
