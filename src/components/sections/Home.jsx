import React from "react";
import Wave from "react-wavify";
import Typed from "react-typed";

function Home() {
  const wave1 = {
    position: "absolute",
    bottom: "75px",
    width: "100%",
  }

  const wave2 = {
    position: "absolute",
    bottom: "30px",
    width: "100%",
  }

  const wave3 = {
    position: "absolute",
    bottom: "-25px",
    width: "100%",
  }

  return (
    <section className="home">
      <img className='home-element'src="/images/tech-lines.png" alt="woman-sitting-at-desk" />
      <div className="align-center">
        <div className="container-fluid">
          <div className="home-center">
            <h1 className="intro-name">Chris Condreay</h1>
            <p className="typed">I am{" "}
            <Typed
              strings={[
                "a Fullstack Developer",
                "a Software Developer",
                "a Software Engineer",
                "Iron Man 🤖"
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            >
            </Typed>
            </p>
          </div>
        </div>
        <div style={wave1}>
          <Wave
            mask="url(#mask1)"
            fill="#598392"
            options={{
              height: 30,
              speed: 0.23,
              amplitude: 25,
              points: 4
            }}
            >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0.5" stopColor="white" />
                <stop offset="0.7" stopColor="black" />
              </linearGradient>
              <mask id="mask1">
                <rect x="0" y="0" width="2140" height="200" fill="url(#gradient)"  />
              </mask>
            </defs>
          </Wave>
        </div>
        <div style={wave2}>
          <Wave
            mask="url(#mask2)"
            fill="#124559"
            options={{
              height: 15,
              speed: 0.15,
              amplitude: 35,
              points: 5
            }}
            >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0.3" stopColor="white" />
                <stop offset="0.35" stopColor="black" />
              </linearGradient>
              <mask id="mask2">
                <rect x="0" y="0" width="2140" height="350" fill="url(#gradient)"  />
              </mask>
            </defs>
          </Wave>
        </div>
        <div style={wave3}>
          <Wave
            mask="url(#mask3)"
            fill="#02394f"
            options={{
              height: 15,
              speed: 0.15,
              amplitude: 35,
              points: 3
            }}
            >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0.3" stopColor="white" />
                <stop offset="0.8" stopColor="black" />
              </linearGradient>
              <mask id="mask3">
                <rect x="0" y="0" width="2140" height="340" fill="url(#gradient)"  />
              </mask>
            </defs>
          </Wave>
        </div>
      </div>
    </section>
  )
};

export default Home;