import Header from "./Header";
import InicioSlider from "./InicioSlider";
import MobileNav from "./MobileNav";
import Amenities from "./Amenities";
import { amenitiesArr } from "@/data/Amenities";

const Inicio = () => {
  const amenities = amenitiesArr;

  return (
    <div className="main-wrapper">
      <div className="inicio-wrapper">
        <MobileNav />
        <Header />
        <InicioSlider />
        {/* <div className="content-container"></div> */}
        <div className="content-wrapper">
          <Amenities amenitiesArr={amenities} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
