import React from "react"
import Layout from "../gatsby-theme-blog/components/layout"

export default function Consulting({ ...props }) {
  const {
    data: {
      site: {
        siteMetadata: { title, navLinks },
      },
    },
  } = props
  return (
    <Layout {...props} title={title} navLinks={navLinks}>
      <h1>Consulting</h1>
      <p>I offer free consulting if you are a charity</p>
      <a href="mailto:nooblingis@gmail.com">
        Get in touch{" "}
        <span role="img" aria-label="smile">
          😁
        </span>
      </a>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        navLinks {
          name
          url
        }
      }
    }
  }
`
