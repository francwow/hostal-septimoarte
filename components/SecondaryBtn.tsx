import Link from "next/link";

type SecondaryBtnProps = {
  btnText: string;
};

const SecondaryBtn = ({ btnText }: SecondaryBtnProps) => {
  return (
    <div className="secondary-btn-container">
      <Link href={"/contacto"}>{btnText}</Link>
    </div>
  );
};

export default SecondaryBtn;
