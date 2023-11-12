import Link from "next/link";
import whatsappLogo from "@/assets/webpImages/whatsapp_logo.webp";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <aside className="whatsapp">
      <Link
        target="_blank"
        href={"https://wa.me/573132335432?text=Hola%20Hostal%20Sep7imo%20Arte"}
      >
        <Image src={whatsappLogo} alt="Whatsapp logo" />
      </Link>
    </aside>
  );
};

export default Whatsapp;
