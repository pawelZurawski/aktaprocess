import React from "react";
import { pagesWithVideo, resetCameraAnnotation } from "src/constants";
import {
    changeBufferManagementMaterials,
    playAnimation,
} from "src/services/animations";
import { playHotspot } from "src/services/annotations";
import { useStore } from "../../store";
import { SidebarVisibility, SubLink } from "../../types/index.d";
import SidebarContent from "./Sidebar.content.component";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
    const {
        activeSubLink,
        sidebarStatus,
        setSidebarStatus,
        animationIsPlaying,
        setActiveSubLink,
    } = useStore();
    const closeSidebar = () => {
        setSidebarStatus(SidebarVisibility.notShow);
        playHotspot(resetCameraAnnotation);
        if (activeSubLink.animations && activeSubLink.animations.length > 1) {
            playAnimation(activeSubLink.animations[1]);
        }
        if (activeSubLink.id === "5") {
            setTimeout(() => {
                changeBufferManagementMaterials("hide");
            }, 600);
        }
        if (
            pagesWithVideo.includes(activeSubLink.id) &&
            !activeSubLink.animations
        ) {
            setTimeout(() => {
                setActiveSubLink({} as SubLink);
            }, 500);
        }
    };
    const replayAnimation = () => {
        if (activeSubLink.animations && activeSubLink.animations.length) {
            playAnimation(activeSubLink.animations[0]);
        }
    };

    return (
        <div
            className={`c-sidebar ${
                sidebarStatus === SidebarVisibility.show
                    ? "show-sidebar-motion"
                    : sidebarStatus === SidebarVisibility.notShow &&
                      "hide-sidebar-motion"
            }`}
        >
            <>
                <button
                    className="button button--secondary button--xlarge button--thick-border"
                    onClick={closeSidebar}
                >
                    Return to 3D overview
                </button>
                <SidebarContent />
                {activeSubLink.animations && activeSubLink.animations.length && (
                    <button
                        className={`button button--secondary button--xlarge button--thick-border ${
                            animationIsPlaying ? "button--disabled" : ""
                        }`}
                        onClick={replayAnimation}
                        disabled={animationIsPlaying}
                    >
                        Replay Animation
                    </button>
                )}
            </>
        </div>
    );
};

export default Sidebar;
