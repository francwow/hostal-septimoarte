import GoogleMap from "./GoogleMap";
import Header from "./Header";
import HostelInfo from "./HostelInfo";
import MobileNav from "./MobileNav";
import Social from "./Social";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="main-wrapper">
      <div className="contact-wrapper">
        <MobileNav />
        <Header />
        <div className="content-container">
          <div className="contact-info-container">
            <GoogleMap />
            <HostelInfo />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
