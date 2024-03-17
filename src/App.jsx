import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div id="Homepage">
    <section> 
      <Navbar /> 
      <Hero />
      </section>
    <section id="Services"> <Parallax type="services" /></section>
    <section> <Services /></section>
    <section id="Portfolio"> <Parallax type="portfolio" /></section>
    <Portfolio />
    <section> Portfolio1</section>
    <section> Portfolio2</section>
    <section> Portfolio3</section>
    <section id="Contact"> Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
