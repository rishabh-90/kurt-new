import React from "react"
import styled from "styled-components"

import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { format } from "date-fns"
import { Link } from "gatsby"

const TextWrapper = styled.div`
  padding: 20px 0;
  p {
  }
`

const BlogPost = ({
  title,
  content,
  showCommentBox,
  date,
  showLink,
  id,
  url,
}) => {
  let disqusConfig = {
    url: ``,
    identifier: `${id}`,
    title: `${title}`,
  }
  return (
    <div className="main-left">
      <div className="main-top-title">
        {showLink ? (
          <Link to={url}>
            <h3>{title}</h3>
          </Link>
        ) : (
          <h3>{title}</h3>
        )}

        <p>
          by <a href="!#">kurt</a> on {format(new Date(date), "MMM dd yyyy")}
        </p>
        <TextWrapper dangerouslySetInnerHTML={{ __html: content }} />
        {showCommentBox && (
          <div className="LEAVE-AERA">
            <CommentCount config={disqusConfig} placeholder={"..."} />
            <Disqus config={disqusConfig} />
          </div>
        )}
      </div>
    </div>
  )
}
export default BlogPost
