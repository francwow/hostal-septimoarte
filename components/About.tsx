import Header from "./Header";
import MobileNav from "./MobileNav";
import InicioIntro from "./InicioIntro";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="main-wrapper">
        <MobileNav />
        <Header />
        <div className="content-wrapper">
          <div className="about-content-wrapper">
            <div className="about-content-container">
              <div className="inicio-intro-filter"></div>
              <div className="about-hero-container">
                <InicioIntro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
