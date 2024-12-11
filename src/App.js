import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
    
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Footer />
        </main>
      </div>
    
    );
  }
  

export default App;
