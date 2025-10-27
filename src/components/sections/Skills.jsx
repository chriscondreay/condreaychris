import React from "react";
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
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 20,
        autoplaySpeed: 0,
        useCSS: true,
        cssEase: "linear",
        width: 20,
        color: [
            226, 235, 236
        ]
    };

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
                gradientColor={[settings.color[0], settings.color[1], settings.color[2]]}
                gradientWidth={settings.width}
                speed={settings.speed}
                style={{zIndex: "0"}}
              >
                  <img src="images/html_css-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/js-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/sass-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/node-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/mysql-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/mongodb-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/react-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/gql-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
                  <img src="images/next-logo.png" alt="" style={{ margin: "0 45px", height: "70px" }} />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Skills;