import React from "react";
import About from "../components/sections/About";
import Header from "../components/layouts/Header";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/layouts/Footer";
import { Element } from "react-scroll";

function Homepage() {
  return (
    <>
      <Header />
      <main className="main">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="100"></div>
      </main>
    <Footer />
    </>
  )
};

export default Homepage;