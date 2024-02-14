import Link from "next/link";
import Icon from "./GoogleIcon";
import Social from "./Social";

const HostelInfo = () => {
  return (
    <div className="footer-info-container">
      <ul className="footer-info">
        <li>
          <Icon icon="call" />
          <Link
            target="_blank"
            href={
              "https://wa.me/573197521741?text=Hola%20Hostal%20Sep7imo%20Arte"
            }
          >
            +57 3197521741
          </Link>
          <Link
            target="_blank"
            href={
              "https://wa.me/573197521741?text=Hola%20Hostal%20Sep7imo%20Arte"
            }
          >
            +57 3132335432
          </Link>
        </li>

        <Link
          target="_blank"
          href={
            "https://www.google.com/maps/search/?api=1&query=Hostal+Sép7imo+Arte"
          }
        >
          <li>
            <Icon icon="location_on" />
            cra 80b # 24d - 45, Fontibón, Bogotá
          </li>
        </Link>
        <Link target="_blank" href={"mailto:hostal7imoarte@gmail.com"}>
          <li>
            <Icon icon="mail" />
            hostalsep7imoarte@gmail.com
          </li>
        </Link>
      </ul>
      <Social />
    </div>
  );
};

export default HostelInfo;
