import React from "react";
import { Title, Text, Image, Spacer, Subtitle } from "../dynamic.components";
import remote_access from "src/assets/images/automation/remote_access.png";

export const FlexibleAutomation: React.FC = (): JSX.Element => {
  return (
    <>
      <Title title="Flexible automation" />
      <div className="c-sidebar__body">
        <Text
          text="The ÄKTA process™ system and UNICORN™ software allow standalone operations or integration into a plant-wide control system. 
          UNICORN™ software can be integrated with other control systems and manufacturing environments using Open Platform Communications-Unified 
          Architecture (OPC-UA) or EtherNet/IP™ gateway."
        />
        <Spacer />
        <Text text="The system can also be customized with other automation solutions, such as DeltaV™ or PlantPAx™ distributed control systems." />

        <Spacer x={3} />
        <Image
          images={[
            {
              src: remote_access,
              alt: "Remote access",
            },
          ]}
        />
      </div>
    </>
  );
};
