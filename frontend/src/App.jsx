import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import PopularSchemes from "./components/PopularSchemes/PopularSchemes";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <PopularSchemes />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;