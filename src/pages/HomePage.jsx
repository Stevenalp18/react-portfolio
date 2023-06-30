import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="text-white h-screen relative flex-col align-bottom">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
