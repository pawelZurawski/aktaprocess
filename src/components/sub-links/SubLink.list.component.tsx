import React from "react";
import { useStore } from "src/store";
import SubLinkComponent from "./SubLink.component";

type SubLinkListProps = {};

const SubLinkList: React.FC<SubLinkListProps> = () => {
  const { activeNavLink } = useStore();
  return (
    <nav className="c-cytiva__sub">
      <ul className="c-cytiva__sub-list">
        {activeNavLink.subLinks.map((subLink) => (
          <React.Fragment key={subLink.id}>
            <SubLinkComponent subLink={subLink} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default SubLinkList;
