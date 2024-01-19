import React from 'react';

type NavItemProps = {
  text: string;
  href: string;
  active: boolean;
  onClick?: () => void; // Make onClick property optional
};

const NavItem: React.FC<NavItemProps> = ({ text, href, active, onClick }) => {
  return (
    <a
      href={href}
      className={`nav__menu-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default NavItem;
