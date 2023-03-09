import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import clsx from "clsx";

type NavItemsProps = {
  active: string;
  mobile?: boolean;
};

const NavItems = (props: NavItemsProps) => {
  return (
    <ul
      className={clsx("list-none", {
        "hidden sm:flex flex-row gap-10": !!!props.mobile,
        "flex justify-end items-start flex-col gap-4": !!props.mobile,
      })}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={clsx("font-medium cursor-pointer hover:text-white", {
            "text-white": props.active == link.title,
            "text-secondary": props.active !== link.title,
            "text-[16px] font-poppins": !!props.mobile,
          })}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-centeer py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Luan Otavio
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active == link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px]  "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div
          className={clsx(
            "p-6 black-gradient right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl absolute top-20",
            {
              hidden: !toggle,
              flex: toggle,
            }
          )}
        >
          <NavItems mobile={true} active={active} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
