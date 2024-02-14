import Header from "./Header";
import MobileNav from "./MobileNav";
import InfoComponentContainer from "./InfoComponentContainer";

const Rooms = () => {
  return (
    <div className="rooms-wrapper">
      <div className="main-wrapper">
        <MobileNav />
        <Header />
        <div className="content-wrapper">
          <InfoComponentContainer />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
