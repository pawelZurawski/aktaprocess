import React from "react";
import { cameraMoveTiming } from "src/constants";
import {
  changeBufferManagementMaterials,
  playAnimation,
} from "src/services/animations";
import { playHotspot } from "src/services/annotations";
import { useStore } from "src/store";
import { SubLink } from "src/types";
import { SidebarVisibility } from "src/types/index.d";

type SubLinkProps = {
  subLink: SubLink;
};

const SubLinkComponent: React.FC<SubLinkProps> = ({ subLink }) => {
  const { setActiveSubLink, setSidebarStatus } = useStore();
  const delayToOpenSidebar = subLink.annotation ? cameraMoveTiming * 1000 : 0;

  const onSubLinkClick = () => {
    setActiveSubLink(subLink);
    if (subLink.annotation) {
      playHotspot(subLink.annotation);
    }
    setTimeout(() => {
      setSidebarStatus(SidebarVisibility.show);
    }, delayToOpenSidebar);
    setTimeout(() => {
      if (subLink.animations && subLink.animations.length) {
        playAnimation(subLink.animations[0]);
      }
      if (subLink.id === "5") {
        changeBufferManagementMaterials("show");
      }
    }, delayToOpenSidebar + 600);
  };

  return (
    <li className="c-cytiva__sub-list__item">
      <button
        className="button--fixwidth button button--primary button--large button--inline"
        onClick={onSubLinkClick}
      >
        {subLink.text}
      </button>
    </li>
  );
};

export default SubLinkComponent;
