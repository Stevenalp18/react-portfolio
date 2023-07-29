import About from "../components/About";
import Navbar from "../components/Navbar";
import ContactSideBtn from "../components/ContactSideBtn";
import SocialSideBar from "../components/SocialSideBar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <ContactSideBtn />
      <SocialSideBar />
    </div>
  );
};

export default AboutPage;
