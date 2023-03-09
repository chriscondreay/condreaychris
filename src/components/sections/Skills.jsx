import React, {Component} from "react";
import Marquee from "react-fast-marquee";


const Skills = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  // }

  // smallScreen() {
  //   const handler = e => this.setState({matches: e.matches});
  //   window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  // }

  // render() {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 5000,
  //     autoplaySpeed: 0,
  //     useCSS: true,
  //     cssEase: "linear"
  //   };

    // const settings2 = {
    //   slidesToShow: 1
    // }

    return (
      <div className="section">
        <div className="skills">
          <div className="container">
            <h2 className="title">Skills</h2>
            <div className="mainContainer" style={{ zIndex: "1" }}>
              <Marquee 
                gradientColor={[226, 235, 236]}
                gradientWidth={20}
                speed={15}
                style={{zIndex: "0"}}
              >
                  <img src="/images/html_css-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/js-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/sass-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/node-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/mysql-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/mongodb-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/react-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/gql-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="/images/next-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Skills;