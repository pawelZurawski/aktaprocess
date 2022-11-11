import React from "react";
import { Title, Text, Image, Spacer } from "../dynamic.components";
import pump_flow_meter_image from "src/assets/images/process-control/pump_flow_meter.jpg";

export const PumpFlowMeter: React.FC = () => {
  return (
    <>
      <Title title="Offline pH calibration" />
      <div className="c-sidebar__body">
        <Text text="High-performing pumps and flow meters provide a large dynamic flow range, from 1 L/h on the smallest systems to 2000 L/h on the largest systems." />
        <Spacer x={2} />
        <Image
          images={[
            {
              src: pump_flow_meter_image,
              alt: "Pump and flow meter image",
            },
          ]}
        />
      </div>
    </>
  );
};
