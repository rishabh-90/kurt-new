import React from "react"
import authorImg from "../assets/img/ga-png.jpeg"
import CommonList from "./CommonList"

const aboutListData = ["Email", "Twitter", "Github", "Instagram", "LinkedIn"]

const recentPostData = [
  "Bulbasaur Pokeball Moss Terrarium",
  "Halloween 2017 Demon Gargoyle",
  "Python and the 555 Blinking Eyes in the Bushes",
  "Ingress: Dangers and First Impressions",
  "Hello World Update",
]

const archiveData1 = [
  "March 2020",
  "November 2017",
  "November 2012",
  "October 2012",
  "March 2012",
  "July 2011",
  "February 2011",
  "March 2010",
  "February 2010",
  "January 2010",
  "December 2009",
  "November 2009",
  "February 2009",
  "November 2008",
  "May 2008",
  "April 2008",
]

const archiveData2 = [
  "Agile",
  "Data",
  "Distributed Computing",
  "Django",
  "Education",
  "Entrepreneurship",
  "Games",
  "Local Business",
  "Machine Learning",
  "Maker",
  "Presentation",
  "Python",
  "Software Engineering",
  "Uncategorized",
]

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
        <div className="post-list-wrap">
          <p>Recent Posts</p>
          <div className="about-list post">
            <CommonList data={recentPostData} />
          </div>
        </div>
        <div className="post-list-wrap post-last">
          <p>Archives</p>
          <div className="about-list post">
            <CommonList data={archiveData1} />
          </div>
        </div>
        <div className="post-list-wrap post-last">
          <p>Archives</p>
          <div className="about-list post">
            <CommonList data={archiveData2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
