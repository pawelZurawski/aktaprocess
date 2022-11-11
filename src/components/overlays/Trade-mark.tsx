import React from "react";
import { useStore } from "src/store";
import { CustomLink, Spacer } from "../sidebar/contents/dynamic.components";

const TradeMark = ({}) => {
  const { closeOverlay } = useStore();
  return (
    <>
      <div
        className="c-cytiva__trademark-section"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="c-cytiva__trademark-top">
          <img
            className="c-cytiva__trademark-top__logo"
            src="favicon.ico"
            width="40"
            alt="Cytiva logo"
          />
          <button
            className="c-cytiva__trademark-top__close"
            onClick={closeOverlay}
          >
            X
          </button>
        </div>
        <p className="c-cytiva__trademark-text">
          Cytiva and the Drop logo are trademarks of Life Sciences IP Holdings
          Corp. or an affiliate doing business as Cytiva.
          <Spacer />
          ÄKTA process, AxiChrom, and UNICORN, are trademarks of Global Life
          Sciences Solutions USA LLC or an affiliate doing business as Cytiva.
          <Spacer />
          DeltaV is a trademark of Emerson Process Management group of
          companies.
          <Spacer />
          Ethernet/IP is a trademark of Odva Inc. <br />
          PlantPAx is a trademark of Rockwell Automation, Inc. <br />
          Any other third-party trademarks are the property of their respective
          owners.
          <Spacer />
          Any use of software may be subject to one or more end-user license
          agreements, a copy of, or notice of which, are available on request.{" "}
          <Spacer />
          © 2022 Cytiva.
          <Spacer />
          For local office contact information, visit:{" "}
          <a
            className="c-cytiva__trademark-text"
            style={{ textDecoration: "none" }}
            href="https://cytiva.com/contact"
            target="_blank"
          >
            cytiva.com/contact
          </a>
        </p>
      </div>
    </>
  );
};

export default TradeMark;
