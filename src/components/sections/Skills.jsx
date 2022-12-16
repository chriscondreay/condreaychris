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
                  <img src="/images/html-css.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/javascript.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/sass.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/node.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/mysql.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/mongodb.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/react.webp" alt="" />
                </div>
                <div className="slide-container">
                  <img src="/images/graphql.webp" alt="" />
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