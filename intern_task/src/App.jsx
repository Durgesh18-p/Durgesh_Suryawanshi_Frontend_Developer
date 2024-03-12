import Hero from "./Components/Navigation/Hero";
import HeroSection from "./Components/HeroSection/HeroSection";
import IDOEvent from "./Components/IDOEvent/IDOEvent";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Roadmap from "./Components/Roadmap/Roadmap";
import Faq from "./Components/FAQ/Faq";
import "./App.css";

function App() {
  return (
    <>
      <Hero></Hero>
      <HeroSection />
      <IDOEvent />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </>
  );
}

export default App;
