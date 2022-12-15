import React from "react";

function Portfolio({ portfolio }) {

const {title, description, languages, image, repo, website} = portfolio;
  return (
    <div className="project-info">
      <img src={image} alt="" />
      <div className="project-text">
        <h4>{title}</h4>
        <h5>{description}</h5>
        <p>{languages}</p>
      </div>
      <div className="links">
        <a href={repo}>Repository</a> | <a href={website}>Website</a>
      </div>
    </div>
  )
}

export default Portfolio;