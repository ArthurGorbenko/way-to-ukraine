import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Post from "../components/post"

const data = [
  {
    body: "posts.0.body",
    images: ["p1p1", "p1p2", "p1p3"],
  },
  {
    body: "posts.1.body",
    images: [],
  },
  {
    body: "posts.2.body",
    images: ["p3p1", "p3p2", "p3p3", "p3p4", "p3p5"],
  },
  {
    body: "posts.3.body",
    images: ["p4p1"],
  },
  {
    body: "posts.4.body",
    images: ["p5p1", "p5p2", "p5p3", "p5p4", "p5p5"],
  },
  {
    body: "posts.5.body",
    images: ["p6p1", "p6p2", "p6p4", "p6p3"],
  },
  {
    body: "posts.6.body",
    images: ["p7p1"],
  },
  {
    body: "posts.7.body",
    images: ["p8p1", "p8p2"],
  },
  {
    body: "posts.8.body",
    images: [],
    videos: ["p9v1"],
  },
  {
    body: "posts.9.body",
    images: ["p10p1", "p10p2", "p10p3", "p10p4", "p10p5", "p10p6"],
    videos: ["p10v1"],
  },
  {
    body: "posts.10.body",
    images: [
      "p11p1",
      "p11p2",
      "p11p3",
      "p11p4",
      "p11p5",
      "p11p6",
      "p11p7",
      "p11p8",
      "p11p9",
      "p11p10",
      "p11p11",
      "p11p12",
      "p11p13",
      "p11p14",
      "p11p15",
    ],
    videos: ["p11v1", "p11v2"],
  },
  {
    body: "posts.11.body",
    images: ["p12p1", "p12p2"],
  },
]

const AchievementsPage = () => {
  return (
    <Layout>
      <Seo title="Achievements" />
      {data.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default AchievementsPage
