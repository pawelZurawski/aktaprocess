import { pagesWithVideo } from "src/constants";
import { useStore } from "../store";
import { Animation, SubLink } from "../types/index.d";
import {
    changeMaterialOpacity,
    changeMaterialVisibility,
    getMaterial,
} from "./materials-textures";

export const storeAnimations = () => {
    const api = useStore.getState().apiref;
    api.getAnimations((err: any, animations: Animation[]) => {
        if (!err) {
            useStore.setState({ animations: animations });
        }
    });
};

export const getAnimation = (index: number) => {
    const { activeSubLink, animations } = useStore.getState();
    return animations.find((animation) => {
        if (activeSubLink.animations) {
            return animation[1] === activeSubLink.animations[index];
        }
    });
};

export const playAnimation = (animationName: string) => {
    const { apiref, activeSubLink, setActiveSubLink } = useStore.getState();
    const animation = useStore
        .getState()
        .animations.find((animation) => animation[1] === animationName);
    const animationId = animation && animation[0];
    const animationTime = animation && animation[2] * 1000;

    apiref.seekTo(0);
    apiref.play(() => {
        useStore.setState({ animationIsPlaying: true });
    });

    apiref.setCurrentAnimationByUID(animationId, function (err: any) {
        if (!err) {
            if (activeSubLink.changeMaterials && activeSubLink.id !== "5") {
                const slectedMaterial = getMaterial(0);
                if (slectedMaterial) {
                    changeMaterialVisibility(slectedMaterial, true);
                }
            }
        }
    });

    setTimeout(() => {
        apiref.pause(() => {
            useStore.setState({ animationIsPlaying: false });
        });
        if (
            activeSubLink.changeMaterials &&
            activeSubLink.animations &&
            activeSubLink.animations.length > 1 &&
            activeSubLink.animations[1] === animationName
        ) {
            if (activeSubLink.id !== "5") {
                const slectedMaterial = getMaterial(0);
                if (slectedMaterial) {
                    changeMaterialVisibility(slectedMaterial, false);
                    if (pagesWithVideo.includes(activeSubLink.id)) {
                        setActiveSubLink({} as SubLink);
                    }
                }
            }
        }
    }, animationTime);
};

export const changeBufferManagementMaterials = (visibility: string) => {
    const buffer_management_mat = getMaterial(0);
    const a_pubm_mat = getMaterial(1);
    const b_pubm_mat = getMaterial(2);
    const c_label_pubm_mat = getMaterial(3);
    const plastic_black_mat = getMaterial(4);
    const plastic_white_pubm_mat = getMaterial(5);

    const opacity = visibility === "show" ? 1 : 0;
    const visibe = visibility === "show" ? true : false;

    if (
        buffer_management_mat &&
        a_pubm_mat &&
        b_pubm_mat &&
        c_label_pubm_mat &&
        plastic_black_mat &&
        plastic_white_pubm_mat
    ) {
        changeMaterialVisibility(buffer_management_mat, visibe);
        changeMaterialOpacity(a_pubm_mat, opacity);
        changeMaterialOpacity(b_pubm_mat, opacity);
        changeMaterialOpacity(c_label_pubm_mat, opacity);
        changeMaterialOpacity(plastic_black_mat, opacity);
        changeMaterialOpacity(plastic_white_pubm_mat, opacity);
    }
};
