import React,  { lazy } from "react";

function Portfolio({ portfolio }) {
    const {title, description, languages, image, repo, website} = portfolio;

    return (
    <div className="project-info">
      <img src={image} alt={title} loading="lazy" />
      <div className="project-text">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-title">{description}</h5>
        <p className="categories">{languages}</p>
          <div className="project-link">
              {repo && (
                  <>
                      <a href={repo} target="_blank" rel="noreferrer" aria-label={`${title} repository`}>
                          Repository
                      </a>
                  </>
              )}
              {repo && website && <span> | </span>}
              {website && (
                  <a href={website} target="_blank" rel="noreferrer" aria-label={`${title} website`}>
                      Website
                  </a>
              )}
          </div>
      </div>

    </div>
    );
}

export default Portfolio;