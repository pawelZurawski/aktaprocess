import React from "react";
// import { unicornVideo } from "src/constants";
import { Title, Text, Spacer } from "../dynamic.components";
//@ts-ignore
import VidyardEmbed from "@vidyard/embed-code";

export const UnicornSoftware: React.FC = () => {
    // const { materials, sidebarStatus } = useStore();
    // const screen = materials.find((mat: Material) => mat.name === 'SCREEN');

    // React.useEffect(() => {
    //   if (screen && sidebarStatus === SidebarVisibility.show) {
    //     addVideoTexture(testVideo, screen);
    //   }
    //   return () => {
    //     if (screen) {
    //       removeVideoTexture(screen);
    //     }
    //   }
    // }, [sidebarStatus])
    VidyardEmbed.api.renderDOMPlayers();

    return (
        <>
            <Title title="UNICORN™ software" />
            <div className="c-sidebar__body">
                <Text text="UNICORN™ software has an interactive process picture that shows the run data. You can set many manual instructions and alarm limits and show them for each component in the process picture. This makes troubleshooting easier." />
                <Spacer x={2} />
                <img
                    style={{ width: "100%", margin: "auto", display: "block" }}
                    className="vidyard-player-embed"
                    src="https://play.vidyard.com/KWP9fZwX5c1oanrgpCtwrc.jpg"
                    data-uuid="KWP9fZwX5c1oanrgpCtwrc"
                    data-v="4"
                    data-type="inline"
                />
            </div>
        </>
    );
};
