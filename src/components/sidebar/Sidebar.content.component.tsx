import React, { FC } from "react";
import { useStore } from "../../store";
import { SubLinkId } from "../../data";
import { Configurable } from "./contents/flexible-design/Configurable";
import { Scalable } from "./contents/flexible-design/Scalable";
import { TurnkySolution } from "./contents/automation/Turnky-solution";
import { UnicornSoftware } from "./contents/automation/Unicorn-software";
import { FlexibleAutomation } from "./contents/automation/Flexible-automation";
import { LargeDisplay } from "./contents/convenient-operations/Large-display";
import { StackLight } from "./contents/convenient-operations/Stack-light";
import { CleanInPlace } from "./contents/convenient-operations/Clean-in-place";
import { ValveDesign } from "./contents/convenient-operations/Valve-design";
import { ColumnPacking } from "./contents/column-packing/Column-packing";
import { BufferManagement } from "./contents/buffer-management/Buffer-management";
import { UvSensor } from "./contents/process-control/Uv-sesor";
import { PhSensor } from "./contents/process-control/Ph-sensor";
import { PumpFlowMeter } from "./contents/process-control/Pump-flow-meter";

const Content: FC = (): JSX.Element => {
  const { activeSubLink } = useStore();
  switch (activeSubLink.id) {
    case SubLinkId.configurable:
      return <Configurable />;
    case SubLinkId.scalable:
      return <Scalable />;
    case SubLinkId.turnkeySolution:
      return <TurnkySolution />;
    case SubLinkId.unicornSoftware:
      return <UnicornSoftware />;
    case SubLinkId.flexibleAutomation:
      return <FlexibleAutomation />;
    case SubLinkId.largeDisplay:
      return <LargeDisplay />;
    case SubLinkId.stackLight:
      return <StackLight />;
    case SubLinkId.cleanInPlace:
      return <CleanInPlace />;
    case SubLinkId.valveDesign:
      return <ValveDesign />;
    case SubLinkId.columnPacking:
      return <ColumnPacking />;
    case SubLinkId.bufferManagement:
      return <BufferManagement />;
    case SubLinkId.uvSensor:
      return <UvSensor />;
    case SubLinkId.phSensor:
      return <PhSensor />;
    case SubLinkId.pumpAndFlow:
      return <PumpFlowMeter />;
    default:
      return <></>;
  }
};

const SidebarContent: FC = (): JSX.Element => {
  return (
    <div className="c-sidebar__wrapper">
      <Content />
    </div>
  );
};

export default SidebarContent;
