import React from "react";
import { Text, Title, Image, Spacer } from "../dynamic.components";
import uv_sensor from "src/assets/images/process-control/uv-sensor.png";
import { useStore } from "src/store";
import { changeMaterialOpacity } from "src/services/materials-textures";
import { Material } from "src/types";
import { SidebarVisibility } from "src/types/index.d";
//@ts-ignore
import VidyardEmbed from "@vidyard/embed-code";

export const UvSensor = () => {
    const { materials, activeSubLink, sidebarStatus } = useStore();
    const boxMaterial = materials.find((mat: Material) => {
        if (activeSubLink.changeMaterials) {
            return mat.name === activeSubLink.changeMaterials[0];
        }
    });

    React.useEffect(() => {
        if (boxMaterial && sidebarStatus === SidebarVisibility.show) {
            changeMaterialOpacity(boxMaterial, 0.5);
        }
        if (boxMaterial && sidebarStatus === SidebarVisibility.notShow) {
            changeMaterialOpacity(boxMaterial, 1);
        }
        return () => {
            if (boxMaterial) {
                changeMaterialOpacity(boxMaterial, 1);
            }
        };
    }, [sidebarStatus]);

    VidyardEmbed.api.renderDOMPlayers();

    return (
        <>
            <Title title="UV instrument" />
            <div className="c-sidebar__body">
                <Text text="The 3-wavelength UV instrument can be calibrated automatically using built-in and certified reference filters, to save you time." />
                <Spacer x={2} />
                <Text text="The absorbance measurement is shown in both absorbance units (AU) and optical density (OD)." />
                <Spacer x={2} />
                <Image
                    images={[
                        {
                            src: uv_sensor,
                            alt: "UV sensor",
                        },
                    ]}
                />
                <Spacer x={2} />
                <img
                    style={{ width: "100%", margin: "auto", display: "block" }}
                    className="vidyard-player-embed"
                    src="https://play.vidyard.com/KixPyY57eraLYENQrtpgzv.jpg"
                    data-uuid="KixPyY57eraLYENQrtpgzv"
                    data-v="4"
                    data-type="inline"
                />
            </div>
        </>
    );
};
