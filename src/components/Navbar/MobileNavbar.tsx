import type { NavItem } from "./navigation";

interface MobileNavbarProps {
  navItems: readonly NavItem[];
}

function MobileNavbar({ navItems }: MobileNavbarProps) {
  return (
    <nav className="mobile-navbar">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.sectionId}
            href={`#${item.sectionId}`}
            className="mobile-navbar__item"
          >
            <Icon size={20} />

            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default MobileNavbar;
