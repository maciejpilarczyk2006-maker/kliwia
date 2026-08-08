import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Appointment from "./components/Appointment/Appointment";

function App() {
  return (
    <div className="app" id="top">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Appointment />
      </main>
    </div>
  );
}

export default App;