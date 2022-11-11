import React from "react";
import { Title, Text, Image, Spacer } from "../dynamic.components";
import offline_calibration from "src/assets/images/process-control/offline_calibration.png";
//@ts-ignore
import VidyardEmbed from "@vidyard/embed-code";

export const PhSensor: React.FC = () => {
    VidyardEmbed.api.renderDOMPlayers();

    return (
        <>
            <Title title="Offline pH calibration" />
            <div className="c-sidebar__body">
                <Text text="The ability to calibrate pH sensor offline combined with sensor traceability simplifies and speeds up calibration. Achieve full traceability, and access documentation of calibration data." />
                <Spacer x={2} />
                <Image
                    images={[
                        {
                            src: offline_calibration,
                            alt: "Offline calibration",
                        },
                    ]}
                />
                <Spacer x={2} />
                <img
                    style={{ width: "100%", margin: "auto", display: "block" }}
                    className="vidyard-player-embed"
                    src="https://play.vidyard.com/ZfjRJwyDTcR2WXh3kWTKcv.jpg"
                    data-uuid="ZfjRJwyDTcR2WXh3kWTKcv"
                    data-v="4"
                    data-type="inline"
                />
            </div>
        </>
    );
};
