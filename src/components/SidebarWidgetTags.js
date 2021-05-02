import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const SidebarWidgetTags = () => {
  return (
    <div className="post-list-wrap post-last">
      <p>Tags</p>
      <div className="about-list post">
        <StaticQuery
          query={graphql`
            query TagsQuery {
              site {
                siteMetadata {
                  title
                }
              }
              allMarkdownRemark(limit: 1000) {
                group(field: frontmatter___tags) {
                  fieldValue
                  totalCount
                }
              }
            }
          `}
          render={data => {
            return (
              <ul>
                {data.allMarkdownRemark.group.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/tags/${item.fieldValue}`}
                    >{`${item.fieldValue} (${item.totalCount})`}</Link>
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

export default SidebarWidgetTags
