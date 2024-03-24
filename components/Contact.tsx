"use client";

import { useEffect } from "react";
import GoogleMap from "./GoogleMap";
import Header from "./Header";
import HostelInfo from "./HostelInfo";
import MobileNav from "./MobileNav";
import Sugerencias from "./Sugerencias";

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
            <div className="contact-info">
              <GoogleMap />
              <HostelInfo />
            </div>
            <Sugerencias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
