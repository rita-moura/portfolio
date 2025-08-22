
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />


          <Skills />
          <Projects />
          <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;