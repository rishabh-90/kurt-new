import * as React from "react"
import Layout from "../components/layout"

import styled from "styled-components"

import Sidebar from "../components/sidebar"
import BlogPost from "../components/BlogPost"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <div className="main-body-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {allMarkdownRemark.nodes.map(post => {
                return (
                  <BlogPost
                    key={post.id}
                    title={post.frontmatter.title}
                    content={post.frontmatter.description}
                    date={post.frontmatter.date}
                    showLink={true}
                    id={post.id}
                    url={post.fields.slug}
                  />
                )
              })}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query indexPage {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          description
          date
        }
      }
    }
  }
`
