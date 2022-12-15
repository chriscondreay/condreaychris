import React from "react";

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="about">
          <h2 className="title">About Me</h2>
          <div className="content">
            <div className="row">
              <div className="col-md-3">
                <div className="text-center text-md-left">
                  <img className="profile-photo" src="/images/profile.jpg" alt="" /></div>
                </div>
              {/* <div className="spacer d-md-none d-lg-none"></div> */}
              <div className="col-md-9 text-md-left">
                <p className="introduction">My name is Chris and I am a Fullstack Web Developer. I attended an online course at UCI and achieved a certificate for coding. I create clean, polished websites and continuing my knowledge and pursuit towards more coding.</p>
                <div>
                  <a href="/images/Condreay_Christopher.pdf" target={'_blank'}>
                    <button className="btn resume-btn border-round">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;