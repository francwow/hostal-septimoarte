"use client";

import { useEffect } from "react";
import GoogleMap from "./GoogleMap";
import Header from "./Header";
import HostelInfo from "./HostelInfo";
import MobileNav from "./MobileNav";

const Contact = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.document.body.style.overflowY = "hidden";
    }
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="main-wrapper">
        <MobileNav />
        <Header />
        <div className="content-container">
          <div className="contact-info-container">
            <GoogleMap />
            <HostelInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
