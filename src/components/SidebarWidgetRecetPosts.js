import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const SidebarWidgetRecetPosts = () => {
  return (
    <div className="post-list-wrap post-last">
      <p>Recent Posts</p>
      <div className="about-list post">
        <StaticQuery
          query={graphql`
            query RecentPosts {
              allMarkdownRemark(limit: 5) {
                nodes {
                  id
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          `}
          render={data => {
            return (
              <ul>
                {data.allMarkdownRemark.nodes.map((post, index) => (
                  <li key={post.id}>
                    <Link
                      to={`${post.fields.slug}`}
                    >{`${post.frontmatter.title}`}</Link>
                  </li>
                ))}
              </ul>
            )
          }}
        />
      </div>
    </div>
  )
}

export default SidebarWidgetRecetPosts
