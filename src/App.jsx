import Hero from './components/Hero';
import AboutMissionVision from './components/AboutMissionVision';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-300/20 selection:text-cyan-300">
      <Hero />
      <AboutMissionVision />
      <Ecosystem />
      <Footer />
    </div>
  );
}
