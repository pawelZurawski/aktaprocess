import { useStore } from "../store";

export const switchLamp = (lampName: string) => {
  const api = useStore.getState().apiref;
  api.current.getMaterialList((err: any, materials: any) => {
    const lamp = materials.find((material: any) => material.name === lampName);
    lamp.channels.EmitColor.factor = 5;
    api.current.setMaterial(lamp, () => {
      // console.log(`${lampName} is turned on`, lamp);
    });
  });
};
