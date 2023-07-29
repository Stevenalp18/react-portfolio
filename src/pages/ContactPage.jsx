import ContactForm from "../components/ContactForm";
import ContactSideBtn from "../components/ContactSideBtn";
import Navbar from "../components/Navbar";
import SocialSideBar from "../components/SocialsBar";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <ContactForm />
      <ContactSideBtn />
      <SocialSideBar />
    </div>
  );
};

export default ContactPage;
