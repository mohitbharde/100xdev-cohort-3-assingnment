import "./App.css";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
function App() {
  return (
    <div className="lg:w-[1440px] mx-auto">
      <NavBar></NavBar>
      <HeroSection />
    </div>
  );
}

export default App;
