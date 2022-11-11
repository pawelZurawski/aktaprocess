import React from "react";
import { useStore } from "src/store";
import Help from "./help";
import TradeMark from "./Trade-mark";

const Overlay = () => {
  const { overlays, closeOverlay } = useStore();

  return (
    <>
      <div className="c-cytiva__overlay" onClick={closeOverlay}>
        {overlays.trademark && <TradeMark />}
        {overlays.help && <Help />}
      </div>
    </>
  );
};

export default Overlay;
