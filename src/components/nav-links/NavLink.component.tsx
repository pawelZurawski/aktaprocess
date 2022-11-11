import React from "react";
import { useStore } from "src/store";
import { CustomLink } from "src/types";

type NavLinkProps = {
  link: CustomLink;
};

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const { activeNavLink, setActiveNavLink, setDropdown } = useStore();
  return (
    <li className="c-cytiva__nav-list__item">
      <button
        className={`${
          activeNavLink.id === link.id ? "button--hover" : ""
        } button button--secondary button--large button--inline`}
        onClick={() => {
          setDropdown();
          setActiveNavLink(link);
        }}
      >
        {link.title}
      </button>
    </li>
  );
};

export default NavLink;
