import React from "react";
import { useStore } from "src/store";
import NavLink from "./NavLink.component";

type NavLinkListProps = {};

const NavLinkList: React.FC<NavLinkListProps> = () => {
  const { links, dropdown, setDropdown } = useStore();
  return (
    <nav
      className={`c-cytiva__nav ${
        dropdown ? "c-cytiva__nav-dropdown--active" : ""
      }`}
    >
      <div className="c-cytiva__hamburger-menu">
        <input
          id="toggle-navlink"
          className="c-cytiva__hamburger-menu__input"
          type={"checkbox"}
          onChange={setDropdown}
        />
        <label
          className="c-cytiva__hamburger-menu__label"
          htmlFor="toggle-navlink"
        >
          <span
            className={`c-cytiva__hamburger-menu__icon ${
              dropdown ? "top-line--active" : "top-line"
            }`}
          ></span>
          <span
            className={`c-cytiva__hamburger-menu__icon ${
              dropdown ? "mid-line--active" : "mid-line"
            }`}
          ></span>
          <span
            className={`c-cytiva__hamburger-menu__icon ${
              dropdown ? "bottom-line--active" : "bottom-line"
            }`}
          ></span>
        </label>
      </div>
      <ul
        className={`c-cytiva__nav-list ${
          dropdown ? "c-cytiva__nav-list__dropdown--active" : ""
        }`}
      >
        {links.map((link) => (
          <React.Fragment key={link.title}>
            <NavLink link={link} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinkList;
