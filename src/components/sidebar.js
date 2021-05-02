import React from "react"
import authorImg from "../assets/img/ga-png.jpeg"
import CommonList from "./CommonList"
import SidebarWidgetRecetPosts from "./SidebarWidgetRecetPosts"
import SidebarWidgetTags from "./SidebarWidgetTags"

const aboutListData = ["Email", "Twitter", "Github", "Instagram", "LinkedIn"]

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="right-wrap">
        <div className="about-ps">
          <div className="about-text">
            <p>About Me</p>
          </div>
          <div className="about-fx">
            <img src={authorImg} alt="" />
            <p>
              I am a technologist and entrepreneur living near North Carolina's
              Research Triangle Park where I dabble in all sorts of geekery. I
              am currently the{" "}
            </p>
          </div>
          <div className="about-pe">
            <p>
              Chief Technology Officer of Talented. I also run the software
              consultancy Grandis Technologies.{" "}
            </p>
          </div>
          <div className="about-list">
            <CommonList data={aboutListData} />
          </div>
        </div>
        <div className="about-pe view">
          <p>
            The views expressed on this blog are my own and do not necessarily
            reflect the views and opinions of my employers and clients.
          </p>
        </div>
        <SidebarWidgetRecetPosts />
        <SidebarWidgetTags />
      </div>
    </div>
  )
}

export default Sidebar
