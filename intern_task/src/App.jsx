import Hero from "./Components/Navigation/Hero";
import HeroSection from "./Components/HeroSection/HeroSection";
import IDOEvent from "./Components/IDOEvent/IDOEvent";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Roadmap from "./Components/Roadmap/Roadmap";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const connectWallet = () => {
    <w3m-button />;
  };

  return (
    <div className="overflow-x-hidden">
      <Hero connectWallet={connectWallet}></Hero>
      <HeroSection />
      <IDOEvent />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
