import GoogleMap from "./GoogleMap";
import HostelInfo from "./HostelInfo";
import Logo from "./Logo";
import Social from "./Social";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="component-container footer-container">
      <footer className="footer">
        <div className="footer-grid">
          <Logo color="white" />
          <div className="google-map-container">
            <GoogleMap />
          </div>
          <HostelInfo />
          <Social />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
