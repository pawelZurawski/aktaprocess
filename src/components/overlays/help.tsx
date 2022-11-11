import React from "react";
import { useStore } from "src/store";
import cytiva_svg from "src/assets/svg/cytiva.svg";

const Help = ({}) => {
  const { closeOverlay } = useStore();
  return (
    <>
      <div
        className="c-cytiva__help-section"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="c-cytiva__help-top">
          <img
            className="c-cytiva__help-top__logo"
            src="favicon.ico"
            width="40"
            alt="Cytiva logo"
          />
          <button className="c-cytiva__help-top__close" onClick={closeOverlay}>
            X
          </button>
        </div>
        <div className="c-cytiva__help-bottom">
          <div className="c-cytiva__help-navigation c-cytiva__bottom-section">
            <div className="c-cytiva__help-navigation__section">
              <svg className="c-cytiva__help-svg-icon">
                <use xlinkHref={`${cytiva_svg}#orbit-around`} />
              </svg>
              <div className="c-cytiva__help-navigation__content">
                <p className="c-cytiva__subtext">Orbit around</p>
                <p className="c-cytiva__text">
                  Left click + drag or one finger drag (touch)
                </p>
              </div>
            </div>
            <div className="c-cytiva__help-navigation__section">
              <svg className="c-cytiva__help-svg-icon" aria-hidden="true">
                <use xlinkHref={`${cytiva_svg}#zoom-in`} />
              </svg>
              <div className="c-cytiva__help-navigation__content">
                <p className="c-cytiva__subtext">Zoom</p>
                <p className="c-cytiva__text">
                  Double click on model or scroll anywhere or Pinch (touch)
                </p>
              </div>
            </div>
            <div className="c-cytiva__help-navigation__section">
              <svg className="c-cytiva__help-svg-icon" aria-hidden="true">
                <use xlinkHref={`${cytiva_svg}#pan`} />
              </svg>
              <div className="c-cytiva__help-navigation__content">
                <p className="c-cytiva__subtext">Pan</p>
                <p className="c-cytiva__text">
                  Right click + drag or Two fingers drag (touch)
                </p>
              </div>
            </div>
          </div>
          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__subtext">Orbit navigation</p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Move camera:</p>
                <p className="c-cytiva__help-row__right">
                  1-finger drag or Left Mouse Button
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Pan:</p>
                <p className="c-cytiva__help-row__right">
                  2-finger drag or Right Mouse Button or{" "}
                  <kbd className="c-cytiva__kbd">SHIFT</kbd>+ Left Mouse Button
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Zoom on object:</p>
                <p className="c-cytiva__help-row__right">
                  Double-tap or Double-click on object
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Zoom out:</p>
                <p className="c-cytiva__help-row__right">
                  Double-tap or Double-click on background
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Zoom:</p>
                <p className="c-cytiva__help-row__right">
                  Pinch in/out or Mousewheel or{" "}
                  <kbd className="c-cytiva__kbd">CTRL</kbd> + Left Mouse Button
                </p>
              </div>
            </div>
          </div>

          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__help-bottom__title c-cytiva__subtext">
              Rendering
            </p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Lit:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">1</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Shadeless:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">2</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">MatCap:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">3</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Wireframe:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">5</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Inspector:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">i</kbd>
                </p>
              </div>
            </div>
          </div>

          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__help-bottom__title c-cytiva__subtext">
              Inspector
            </p>
            <span className="c-cytiva__divider"></span>
          </div>

          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__subtext">General</p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Fullscreen:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">f</kbd>
                </p>
              </div>
            </div>
          </div>
          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__subtext">Lighting</p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Rotate lighting:</p>
                <p className="c-cytiva__help-row__right">
                  3-finger drag or <kbd className="c-cytiva__kbd">ALT</kbd> +
                  Left Mouse Button
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Rotate env. only:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">ALT</kbd> +{" "}
                  <kbd className="c-cytiva__kbd">SHIFT</kbd> + Left Mouse Button
                </p>
              </div>
            </div>
          </div>
          <div className="annotation-shortcuts">
            <p className="c-cytiva__help-bottom__title c-cytiva__subtext">
              Annotations
            </p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Previous:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">j</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">pageup</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Next:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">k</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">pagedown</kbd>
                </p>
              </div>
            </div>
          </div>

          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__subtext">Animations</p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Previous frame:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">b</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">ctrl+b</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">shift+b</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Next frame:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">n</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">ctrl+n</kbd> or{" "}
                  <kbd className="c-cytiva__kbd">shift+n</kbd>
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Go to time/frame:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">enter</kbd>
                </p>
              </div>
            </div>
          </div>

          <div className="c-cytiva__bottom-section">
            <p className="c-cytiva__subtext">Sound</p>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Mute:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">m</kbd>
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="c-cytiva__subtext">First-person navigation</span>
            <span className="c-cytiva__divider"></span>
            <div className="c-cytiva__text">
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Move:</p>
                <p className="c-cytiva__help-row__right">
                  <kbd className="c-cytiva__kbd">↑</kbd>,
                  <kbd className="c-cytiva__kbd">←</kbd>,
                  <kbd className="c-cytiva__kbd">↓</kbd>,
                  <kbd className="c-cytiva__kbd">→</kbd> (or{" "}
                  <kbd className="c-cytiva__kbd">W</kbd>,
                  <kbd className="c-cytiva__kbd">A</kbd>,
                  <kbd className="c-cytiva__kbd">S</kbd>,
                  <kbd className="c-cytiva__kbd">D</kbd>)
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Look around:</p>
                <p className="c-cytiva__help-row__right">
                  1-finger drag or Left Mouse Button
                </p>
              </div>
              <div className="c-cytiva__help-row">
                <p className="c-cytiva__help-row__left">Adjust speed:</p>
                <p className="c-cytiva__help-row__right">Mousewheel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
