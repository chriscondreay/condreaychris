import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  smallScreen() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      useCSS: true,
      cssEase: "linear"
    };

    // const settings2 = {
    //   slidesToShow: 1
    // }

    return (
      <div className="section">
        <div className="skills">
          <div className="container">
            <h2 className="title">Skills</h2>
            <div className="mainContainer">
              <Slider {...settings}>
                <div className="slide-container">
                  <img src="/images/html-css.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/javascript.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/sass.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/node.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/mysql.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/mongodb.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/react.png" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/graphql.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;