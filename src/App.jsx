import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Expreience";
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
        <div class="bee-container">
          <div class="bee"></div>
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
