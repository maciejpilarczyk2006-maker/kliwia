import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutOwner from "./components/AboutOwner/AboutOwner";
import Certificates from "./components/Certificates/Certificates";
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
        <AboutOwner />
        <Certificates />
        <Services />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;