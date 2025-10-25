import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-300/20 selection:text-cyan-300">
      <Hero />
      <MissionVision />
      <Ecosystem />
      <Footer />
    </div>
  );
}
