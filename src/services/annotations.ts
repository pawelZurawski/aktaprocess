import { cameraMoveTiming } from "../constants";
import { useStore } from "../store";
import { Annotation } from "../types";

export const storeAnnotations = () => {
  const api = useStore.getState().apiref;
  api.getAnnotationList((err: any, annotations: Annotation[]) => {
    if (!err) {
      useStore.setState({ annotations: annotations });
    }
  });
};

export const playHotspot = (annotationName: string) => {
  const api = useStore.getState().apiref;
  const annotation = useStore
    .getState()
    .annotations.find((annotation) => annotation.name === annotationName);

  api.setCameraLookAt(
    annotation?.eye,
    annotation?.target,
    cameraMoveTiming,
    function (err: any) {
      if (!err) {
      }
    }
  );
};
