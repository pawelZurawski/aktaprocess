import React from "react";
// import { unicornVideo } from "src/constants";
import { Title, Text, Spacer, Image, Subtitle } from "../dynamic.components";
import system_control from "src/assets/images/vlcsnap.png";

export const BufferManagement: React.FC = (): JSX.Element => {
    return (
        <>
            <Title title="Buffer management" />
            <div className="c-sidebar__body">
                <Text
                    text="The ÄKTA process™ system has an option for inline dilution (ILD), an automated way to prepare buffers. 
          Different buffer concentrates are used and then diluted by water to create the required buffers. 
          ILD can save time, labor, and space, while ensuring consistently high buffer quality."
                />
                <Spacer x={2} />
                <Subtitle subtitle="Inline dilution and the interactive process picture" />
                <Image
                    images={[
                        {
                            src: system_control,
                            alt: "System control",
                            customWidth: "90%",
                        },
                    ]}
                />
            </div>
        </>
    );
};
