"use client";

import useLanguage from "@/context/LanguageContext";

type MenuItemProps = {
  descES: string;
  descEN: string;
  itemPrice: string;
};

const MenuItem = ({ descES, descEN, itemPrice }: MenuItemProps) => {
  const { languageActive } = useLanguage();

  return (
    <div className="menu-item">
      <div className="item-desc">
        <span>{languageActive === "ES" ? descES : descEN}</span>
      </div>
      <div className="item-price">
        <span>{itemPrice}</span>
      </div>
    </div>
  );
};

export default MenuItem;
