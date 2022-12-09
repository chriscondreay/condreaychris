import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
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
      </main>
    </>
  )
};

export default Homepage;