import Link from "next/link";

type MainBtnProps = {
  btnText: string;
};

const MainBtn = ({ btnText }: MainBtnProps) => {
  return (
    <div className="main-btn-container">
      <Link href={"/contacto"}>{btnText}</Link>
    </div>
  );
};

export default MainBtn;
