import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ReactPaginate from "react-paginate"

import Sidebar from "../components/sidebar"
import BlogPost from "../components/BlogPost"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const [offset, setOffset] = useState(0)
  const [posts, setData] = useState([])
  const [perPage] = useState(3)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const slice = allMarkdownRemark.nodes.slice(offset, offset + perPage)
    const postData = slice.map(post => (
      <BlogPost
        key={post.id}
        title={post.frontmatter.title}
        content={post.html}
        date={post.frontmatter.date}
        showLink={true}
        id={post.id}
        url={post.fields.slug}
      />
    ))
    setData(postData)
    setPageCount(Math.ceil(allMarkdownRemark.nodes.length / perPage))
  }, [offset])

  const handlePageClick = e => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
  }

  return (
    <Layout>
      <div className="main-body-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts}
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
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
        html
        frontmatter {
          title
          description
          date
        }
      }
    }
  }
`
