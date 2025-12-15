import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechnicalExpertise from './components/TechnicalExpertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechnicalExpertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
