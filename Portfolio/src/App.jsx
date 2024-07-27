import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed "
      style={{ cursor: `auto` }}>
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Skillset />
        <Edu />
        <Exp />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
