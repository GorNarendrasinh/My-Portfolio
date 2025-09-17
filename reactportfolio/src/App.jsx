import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import ContactComponent from "./components/Contact/Contact"
import Achievements from "./components/Achievements/Achievements"
import Hireme from "./components/Hireme/Hireme"
import ChatBot from "./components/ChatBot/ChatBot";

 

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
     <ChatBot/>
      <Navbar />
      <HeroSection />
      <About />
      <Skills/>
      <Projects />
      <Certifications/>
      <Achievements/>
      <Hireme/>
      <ContactComponent />
      <Footer />
    
    </div>
  );
}

export default App;
