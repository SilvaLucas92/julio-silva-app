import { AboutMe } from "../about-me/AboutMe";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { Modality } from "../modality/Modality";
import Navbar from "../navbar/Navbar";
import { Therapy } from "../terapy/Therapy";
import { TherapyType } from "../TherapyType/TherapyType";

const Layout = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      {/* <TherapyType /> */}
      <Therapy />
      <Modality />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
