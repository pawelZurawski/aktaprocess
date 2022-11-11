import React from "react";
import { Title, Text, Spacer, Video, Image } from "../dynamic.components";
//@ts-ignore
import VidyardEmbed from "@vidyard/embed-code";

export const ColumnPacking: React.FC = (): JSX.Element => {
    VidyardEmbed.api.renderDOMPlayers();

    return (
        <>
            <Title title="Column packing" />
            <div className="c-sidebar__body">
                <Text text="The column valve designed for two columns allows you to pack AxiChrom™ columns easily and quickly. Keep columns connected between the packing and the chromatography run." />
                <Spacer x={2} />
                <Text text="The interactive process picture will guide you to pack your column like an expert. All AxiChrom™ column sizes are traceable in the column list, which makes it easy to save relevant parameters for packed columns." />
                <Spacer x={2} />

                <Spacer x={2} />
                <img
                    style={{ width: "100%", margin: "auto", display: "block" }}
                    className="vidyard-player-embed"
                    src="https://play.vidyard.com/E5gJrWRzT97jJo8bsiLbHh.jpg"
                    data-uuid="E5gJrWRzT97jJo8bsiLbHh"
                    data-v="4"
                    data-type="inline"
                />
            </div>
        </>
    );
};
