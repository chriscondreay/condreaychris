import React from "react";

function Projects() {


  return (
    <div className="section">
      <div className="projects">
        <div className="container">
          <div className="page-title">
            <h2 className="title">Projects</h2>
          </div>
          <div className="row project-items">
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
                <img src="images/project-cards/img-1.webp" alt="" />
                <div className="project-text">
                  <h3 className="card-title">Workout Tracker</h3>
                  <h5 className="card-title">Exercise tracker utilizing NoSQL</h5>
                  <p className="categories">NoSQL | MongoDB</p>
                  <div className="project-link">
                    <a
                      href="https://github.com/chriscondreay/Workout-tracker"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Repository
                    </a>
                    <span> | </span>
                    <a
                      href="https://track-workout1.herokuapp.com/"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
              <img src="images/project-cards/img-2.webp" alt="" />
                <div className="project-text">
                  <h3 className="card-title">Book Search Engine</h3>
                  <h5 className="card-title">Find your favorite books</h5>
                  <p className="categories">React | GraphQL</p>
                  <div className="project-link">
                    <a
                      href="https://github.com/chriscondreay/Book-Search-Engine"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Repository
                    </a>
                    <span> | </span>
                    <a
                      href="https://cool-book-search.herokuapp.com/"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
              <img src="images/project-cards/img-3.webp" alt="" />
                <div className="project-text">
                  <h3 className="card-title">Budget Tracker PWA</h3>
                  <h5 className="card-title">Manage your spending online/offline</h5>
                  <p className="categories"> NoSQL | PWA | JS</p>
                  <div className="project-link">
                    <a
                      href="https://github.com/chriscondreay/Budget-Tracker"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Repository
                    </a>
                    <span> | </span>
                    <a
                      href="https://budget-tracker-app01.herokuapp.com/"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
              <img src="images/project-cards/img-3.webp" alt="" />
                <div className="project-text">
                  <h3 className="card-title">Catworx BadgeMaker</h3>
                  <h5 className="card-title">Create a badge using C#</h5>
                  <p className="categories"> C# | SkiaSharp</p>
                  <div className="project-link">
                    <a
                      href="https://github.com/chriscondreay/CatWorx.Badgemaker"
                      target='_blank'
                      rel="noreferrer"
                      >
                        Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;