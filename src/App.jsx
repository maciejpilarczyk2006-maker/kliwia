import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app" id="top">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;