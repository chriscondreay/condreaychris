import React from "react";
// import Works from "./content/Works"

// const projectData = [
//   {
//     id: 1,
//     title: "Pints & Pixels",
//     description: "Frontend Bar Finder",
//     languages: ["API's", "JS"],
//     image: "images/project-cards/img-1.png",
//     repo: "https://github.com/Mapono/Project_1",
//     website: "https://mapono.github.io/Project_1/"
//   },
//   {
//     id: 2,
//     title: "Pints & Pixels",
//     description: "Frontend Bar Finder",
//     languages: ["API's", "JS"],
//     image: "images/project-cards/img-2.png",
//     repo: "https://github.com/Mapono/Project_1",
//     website: "https://mapono.github.io/Project_1/"
//   },
//   {
//     id: 3,
//     title: "Pints & Pixels",
//     description: "Frontend Bar Finder",
//     languages: ["API's", "JS"],
//     image: "images/project-cards/img-3.png",
//     repo: "https://github.com/Mapono/Project_1",
//     website: "https://mapono.github.io/Project_1/"
//   }
// ]

function Projects() {
  // const [getData] = useState(projectData);


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
                <img src="images/project-cards/img-1.png" alt="" />
                <div className="project-text">
                  <h3>Workout Tracker</h3>
                  <h4>Exercise tracker utilizing NoSQL</h4>
                  <p>NoSQL | CSS | JS</p>
                  <a href="/">Link</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
              <img src="images/project-cards/img-2.png" alt="" />
                <div className="project-text">
                  <h4 className="h4">Book Search Engine</h4>
                  <h5>Find your favorite books</h5>
                  <p>React | GraphQL</p>
                  <a 
                    className="link" 
                    href="https://github.com/chriscondreay/Book-Search-Engine" 
                    target='_blank'
                    rel="noreferrer"
                    >
                      Repository
                  </a>
                  <span> | </span>
                  <a 
                    className="link" 
                    href="https://cool-book-search.herokuapp.com/" 
                    target='_blank'
                    rel="noreferrer"
                    >
                      Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 project-card">
              <div className="project-info">
              <img src="images/project-cards/img-3.png" alt="" />
                <div className="project-text">
                  <h4 className="h4">Workout Tracker</h4>
                  <h5>Track your fitness</h5>
                  <p>NoSQL | Express.js</p>
                  <a href="/">Link</a>
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