import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../store";
import { SidebarVisibility } from "../types/index.d";
import { Viewer } from "./model-3D/Viewer";
import "../index.scss";
import { storeAnimations } from "../services/animations";
import Sidebar from "./sidebar/Sidebar.component";
import NavLinkList from "./nav-links/NavLink.list.component";
import SubLinkList from "./sub-links/SubLink.list.component";
import { storeAnnotations } from "src/services/annotations";
import { storeMaterials } from "src/services/materials-textures";
import { useResizeWindow } from "src/hooks/window-resize";
import HelpLegalWrapper from "./overlays/Help.legal.wrapper.component";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { sidebarStatus, viewIsReady, apiref } = useStore();
  const [hideApp, setHideApp] = React.useState<boolean>(false);
  const { dimensions } = useResizeWindow();

  useEffect(() => {
    if (apiref && viewIsReady) {
      storeAnimations();
      storeAnnotations();
      storeMaterials();
    }
  }, [viewIsReady]);

  if (containerRef.current) {
    containerRef.current.style.setProperty(
      "--vh",
      `${dimensions.height / 100}px`
    );
  }

  return (
    <div
      ref={containerRef}
      className={`c-cytiva__container c-cytiva__container--no-spacing ${
        hideApp && "c-cytiva__container--hide"
      }`}
    >
      <div
        className={`${
          sidebarStatus === SidebarVisibility.show
            ? "iframe-motion-left"
            : sidebarStatus === SidebarVisibility.notShow &&
              "iframe-motion-right"
        }`}
      >
        <Viewer />
      </div>
      {sidebarStatus !== SidebarVisibility.show && viewIsReady && (
        <>
          <NavLinkList />
          <SubLinkList />
          <button
            className={`button button--large button--tertiary c-cytiva__exit-btn`}
            onClick={() => setHideApp(true)}
          >
            Exit 3D
          </button>
        </>
      )}
      <Sidebar />
      {}
      <HelpLegalWrapper />
    </div>
  );
};

export default App;
