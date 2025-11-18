import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import React from "react";
class App extends Component {
  render() {
    return (
      <>


        <Nav />
        <Header />

        <Experience />
        <Portfolio />

        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;
