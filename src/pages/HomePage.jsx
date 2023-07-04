import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RightToProject from "../components/RightToProject";
import DownToAbout from "../components/DownToAbout";

const HomePage = () => {
  return (
    <div className="text-white h-screen relative flex-col align-bottom">
      <Navbar />
      <Hero />
      <RightToProject />
      <DownToAbout />
    </div>
  );
};

export default HomePage;
