import { useStore } from "src/store";
import Overlay from "./Overlay";

const HelpLegalWrapper = () => {
  const { viewIsReady, toggleOverlay, overlays } = useStore();
  return (
    <>
      {viewIsReady && (
        <button
          className={`button button--medium button--tertiary c-cytiva__trademark-icon`}
          onClick={() => toggleOverlay("trademark")}
        >
          Legal
        </button>
      )}
      {viewIsReady && (
        <button
          className={`button button--medium button--tertiary c-cytiva__help-icon`}
          onClick={() => toggleOverlay("help")}
        >
          Help
        </button>
      )}
      {(overlays.help || overlays.trademark) && <Overlay />}
    </>
  );
};
export default HelpLegalWrapper;
