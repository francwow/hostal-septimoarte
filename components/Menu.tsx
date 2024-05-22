import Header from "./Header";
import MobileNav from "./MobileNav";
import MenuSection from "./MenuSection";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="main-wrapper">
        <Header />
        <MobileNav />
        <div className="menu-container">
          <div className="menu">
            <div className="menu-main-heading">
              <h1>Menu</h1>
            </div>
            <MenuSection headingES="Desayunos" headingEN="Breakfast">
              <MenuItem
                descES="Desayuno de la casa"
                descEN="Home breakfast"
                itemPrice="COP $10.000"
              />
            </MenuSection>
            <MenuSection headingES="Snacks" headingEN="Snacks">
              <MenuItem
                descES="Jet Wafer"
                descEN="Jet Wafer"
                itemPrice="COP $3.000"
              />
              <MenuItem
                descES="Chocolatina Jet"
                descEN="Jet Milk Chocolate"
                itemPrice="COP $2.000"
              />
              <MenuItem
                descES="Jet Cookies & Cream"
                descEN="Jet Cookies & Cream"
                itemPrice="COP $2.000"
              />
              <MenuItem
                descES="Papas Fritas"
                descEN="Potato Chips"
                itemPrice="COP $3.000"
              />
              <MenuItem
                descES="Platanitos Maduros"
                descEN="Banana Chips"
                itemPrice="COP $3.000"
              />
            </MenuSection>
            <MenuSection headingES="Bebidas" headingEN="Drinks">
              <MenuItem
                descES="Soda/Gaseosa"
                descEN="Soda"
                itemPrice="COP $4.500"
              />
              <MenuItem
                descES="Cerveza Club Colombia"
                descEN="Club Colombia Beer"
                itemPrice="COP $8.000"
              />
              <MenuItem
                descES="Bretaña (Agua con gas)"
                descEN="Bretaña (Soda Water)"
                itemPrice="COP $4.000"
              />
              <MenuItem
                descES="Botella de Agua"
                descEN="Bottled Water"
                itemPrice="COP $2.500"
              />
              <MenuItem
                descES="Aguardiente Antioqueño verde 750ml"
                descEN="Aguardiente Antioqueño verde 750ml"
                itemPrice="COP $60.000"
              />
              <MenuItem
                descES="Vino La Pluma - Lambrusco Rosso 750ml"
                descEN="La Pluma Wine - Lambrusco Rosso 750ml"
                itemPrice="COP $40.000"
              />
              <MenuItem
                descES="Vino San Telmo - Malbec 2022 - 750ml"
                descEN="San Telmo Wine - Malbec 2022 - 750ml"
                itemPrice="COP $40.000"
              />
              <MenuItem
                descES="Vino Alto los Carneros - Merlot 2022 - 750ml"
                descEN="Alto los Carneros Wine - Merlot 2022 - 750ml"
                itemPrice="COP $40.000"
              />
            </MenuSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
