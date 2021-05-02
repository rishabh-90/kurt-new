import * as React from "react"
import BlogPost from "../components/BlogPost"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  return (
    <Layout>
      <div className="main-body-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-left">
                <BlogPost
                  title={markdownRemark.frontmatter.title}
                  content={markdownRemark.frontmatter.description}
                  date={markdownRemark.frontmatter.date}
                  showCommentBox={true}
                  id={markdownRemark.id}
                  url={markdownRemark.fields.slug}
                />
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        date
        title
        description
        tags
      }
    }
  }
`
