import React from "react";
import { Title, Text } from "../dynamic.components";

export const CleanInPlace: React.FC = (): JSX.Element => {
  return (
    <>
      <Title title="Clean-in-place" />
      <div className="c-sidebar__body">
        <Text text="Clean-in-place (CIP) valves are placed together with inlet valves and manifolds to drive automated cleaning." />
      </div>
    </>
  );
};
