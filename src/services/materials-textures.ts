import { useStore } from "../store";
import { Material, LampName } from "../types";

export const storeMaterials = () => {
  const api = useStore.getState().apiref;
  api.getMaterialList((err: any, materials: Material[]) => {
    if (!err) {
      useStore.setState({ materials: materials });
    }
  });
};

export const getMaterial = (index: number) => {
  const { activeSubLink, materials } = useStore.getState();

  return (
    activeSubLink.changeMaterials &&
    materials.find((mat: Material) => {
      if (activeSubLink.changeMaterials) {
        return mat.name === activeSubLink.changeMaterials[index];
      }
    })
  );
};

export const getMaterialByName = (name: string) => {
  const { materials } = useStore.getState();

  return materials.find((mat: Material) => mat.name === name);
};

export const addVideoTexture = (videoUrl: string, material: Material) => {
  const api = useStore.getState().apiref;

  api.addVideoTexture(
    videoUrl,
    {
      loop: false,
      mute: true,
    },
    function (err: any, textureUid: string) {
      let screen = material;
      if (!err) {
        screen = {
          ...screen,
          channels: {
            ...screen.channels,
            EmitColor: {
              ...screen.channels.EmitColor,
              enable: true,
              factor: 1,
              texture: {
                ...screen.channels.EmitColor.texture,
                uid: textureUid,
              },
            },
            DiffuseColor: {
              ...screen.channels.DiffuseColor,
              texture: {
                ...screen.channels.DiffuseColor.texture,
                uid: textureUid,
              },
            },
          },
        };
        api.setMaterial(screen);
      }
    }
  );
};

export const removeVideoTexture = (material: Material) => {
  const api = useStore.getState().apiref;
  api.setMaterial(material);
};

export const switchLamp = (lampName: LampName) => {
  const api = useStore.getState().apiref;
  const materials = useStore.getState().materials;
  const lampStatus = useStore.getState().stackLights[lampName];
  const toggleLamp = lampStatus ? 5 : 0;

  let lamp = materials.find(
    (material: Material) => material.name === lampName
  ) as Material;
  lamp = {
    ...lamp,
    channels: {
      ...lamp.channels,
      EmitColor: { ...lamp.channels.EmitColor, factor: toggleLamp },
    },
  };
  api.setMaterial(lamp);
};

export const changeMaterialOpacity = (material: Material, opacity: number) => {
  const api = useStore.getState().apiref;
  let updatedMaterial = material;
  updatedMaterial = {
    ...material,
    channels: {
      ...material.channels,
      Opacity: { ...material.channels.Opacity, factor: opacity },
    },
  };
  api.setMaterial(updatedMaterial);
};

export const changeMaterialVisibility = (
  material: Material,
  visible: boolean
) => {
  const api = useStore.getState().apiref;
  let updatedMaterial = material;
  const visibleState = {
    emitFactor: 1,
    ior: 1.008,
    reflectionColor: [0, 0.24228, 0.15896],
  };

  updatedMaterial = visible
    ? {
        ...material,
        channels: {
          ...material.channels,
          Opacity: {
            ...material.channels.Opacity,
            ior: visibleState.ior,
            refractionColor: visibleState.reflectionColor,
          },
          EmitColor: {
            ...material.channels.EmitColor,
            factor: visibleState.emitFactor,
          },
        },
      }
    : material;
  api.setMaterial(updatedMaterial);
};
