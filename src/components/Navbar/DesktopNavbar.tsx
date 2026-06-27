import type { NavItem } from "./navigation";

import { DownloadIcon } from "../icons";
import { usePortfolio } from "../../contexts/PortfolioContext";

interface DesktopNavbarProps {
  navItems: readonly NavItem[];
}

function DesktopNavbar({ navItems }: DesktopNavbarProps) {
  const { profile } = usePortfolio();

  return (
    <header className="desktop-navbar">
      <div className="desktop-navbar__content">
        <a href="#hero" className="desktop-navbar__logo">
          VB
        </a>

        <nav className="desktop-navbar__nav">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className="desktop-navbar__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={profile.resumeUrl} download className="desktop-navbar__resume">
          <DownloadIcon size={18} />
          Resume
        </a>
      </div>
    </header>
  );
}

export default DesktopNavbar;
