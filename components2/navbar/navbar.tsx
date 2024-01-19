"use client"
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Login", href: "/about" },
  { text: "Register", href: "/contact" },
  { text: "Profile", href: "/profile" },
  { text: "Logout", href: "/logout" },
  { text: "Workout", href: "/workout" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <nav className="nav">
        <Link href="/">
       
            <h1 className="logo">Iron</h1>
          
        </Link>
        <div onClick={toggleNav} className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu-list ${navActive ? 'active' : ''}`}>
          {MENU_LIST.map((menu, idx) => (
            <div key={menu.text}>
              <NavItem
                active={activeIdx === idx}
                {...menu}
                onClick={() => {
                  setActiveIdx(idx);
                  toggleNav();
                }}
              />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
