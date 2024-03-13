// Importing necessary components and styles
import Hero from "./Components/Navigation/Hero"; // Importing the Hero component
import HeroSection from "./Components/HeroSection/HeroSection"; // Importing the HeroSection component
import IDOEvent from "./Components/IDOEvent/IDOEvent"; // Importing the IDOEvent component
import Tokenomics from "./Components/Tokenomics/Tokenomics"; // Importing the Tokenomics component
import Roadmap from "./Components/Roadmap/Roadmap"; // Importing the Roadmap component
import Faq from "./Components/FAQ/Faq"; // Importing the Faq component
import Footer from "./Components/Footer/Footer"; // Importing the Footer component
import "./App.css"; // Importing the main CSS file

// Main App component
function App() {
  // Function to handle wallet connection
  const connectWallet = () => {
    <w3m-button />; // Placeholder for wallet connection functionality
  };

  // Rendering components
  return (
    <div className="overflow-x-hidden">
      {/* Rendering the Hero component */}
      <Hero connectWallet={connectWallet}></Hero>
      {/* Rendering the HeroSection component */}
      <HeroSection />
      {/* Rendering the IDOEvent component */}
      <IDOEvent />
      {/* Rendering the Tokenomics component */}
      <Tokenomics />
      {/* Rendering the Roadmap component */}
      <Roadmap />
      {/* Rendering the Faq component */}
      <Faq />
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

export default App; // Exporting the App component
