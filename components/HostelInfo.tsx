import Link from "next/link";

const HostelInfo = () => {
  return (
    <div className="footer-info-container">
      <ul className="footer-info">
        <Link
          target="_blank"
          href={
            "https://wa.me/573197521741?text=Hola%20Hostal%20Sep7imo%20Arte"
          }
        >
          <li>
            <span className="material-symbols-outlined">call</span>
            +57 3197521741
          </li>
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.google.com/maps/search/?api=1&query=Hostal+Sép7imo+Arte"
          }
        >
          <li>
            <span className="material-symbols-outlined">location_on</span>
            cra 80b # 24d - 45, Fontibón, Bogotá
          </li>
        </Link>
        <Link target="_blank" href={"mailto:francwow06@gmail.com"}>
          <li>
            <span className="material-symbols-outlined">mail</span>
            correo
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HostelInfo;
