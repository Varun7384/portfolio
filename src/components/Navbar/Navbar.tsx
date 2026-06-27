import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import { NAV_ITEMS } from "./navigation";
import { usePortfolio } from "../../contexts/PortfolioContext";

import "./Navbar.css";

function Navbar() {
  const { projects } = usePortfolio();

  const navItems = NAV_ITEMS.filter((item) =>
    item.showWhen(projects.length > 0),
  );

  return (
    <>
      <DesktopNavbar navItems={navItems} />
      <MobileNavbar navItems={navItems} />
    </>
  );
}

export default Navbar;
