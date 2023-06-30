import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactHomeBtn from "../components/ContactHomeBtn";
import HomePageNavArrows from "../features/HomePageNavArrows";

const HomePage = () => {
  return (
    <div className="text-white h-screen relative flex-col align-bottom">
      <Navbar />
      <Hero />
      {/* <ContactHomeBtn /> */}
      {/* <HomePageNavArrows /> */}
    </div>
  );
};

export default HomePage;
