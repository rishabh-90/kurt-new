import React from "react"
import headerImg from "../assets/img/site-logo.png"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-logo">
              <Link to="/">
                <StaticImage src="../assets/img/site-logo.png" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
