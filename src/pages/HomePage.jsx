import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DownToAbout from "../components/downToAbout";
import RightToProject from "../components/RightToProject";

const HomePage = () => {
  return (
    <div className="text-white h-screen relative flex-col align-bottom">
      <Navbar />
      <Hero />
      <DownToAbout />
      <RightToProject />
    </div>
  );
};

export default HomePage;
