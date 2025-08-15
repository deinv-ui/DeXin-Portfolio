import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import SwordCursor from "./components/SwordCursor";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* Use className instead of class in JSX */}
        <div className="bee-container">
          <div className="bee"></div>
        </div>

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
