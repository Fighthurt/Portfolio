import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>  
      </div>
      <div className="container mx-auto px-8">
        <Navbar />  
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact/>
      </div>
    </div>
  );
};

export default App
