import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";
import {
    Animation,
    Annotation,
    CustomLink,
    CytivaState,
    LampName,
    SubLink,
} from "../types";
import { Overlays, SidebarVisibility } from "../types/index.d";
import { links } from "../data";

export const useStore = create<CytivaState, any>(
    devtools((set) => ({
        links: links,
        apiref: "",
        setApiref: (api: any) =>
            set(
                produce((state: CytivaState) => {
                    state.apiref = api;
                })
            ),
        viewIsReady: false,
        setViewIsReady: (isReady: boolean) =>
            set(
                produce((state: CytivaState) => {
                    state.viewIsReady = isReady;
                })
            ),
        sidebarStatus: SidebarVisibility.notSet,
        animations: [],
        setAnimations: (animations: Animation[]) =>
            set(
                produce((state: CytivaState) => {
                    state.animations = animations;
                })
            ),
        annotations: [],
        setAnnotations: (annotations: Annotation[]) =>
            set(
                produce((state: CytivaState) => {
                    state.annotations = annotations;
                })
            ),
        activeNavLink: links[0],
        setActiveNavLink: (navLink: CustomLink) =>
            set(
                produce((state: CytivaState) => {
                    state.activeNavLink = navLink;
                })
            ),
        activeSubLink: links[0].subLinks[0],
        setActiveSubLink: (subLink: SubLink) =>
            set(
                produce((state: CytivaState) => {
                    state.activeSubLink = subLink;
                })
            ),
        setSidebarStatus: (status: SidebarVisibility) =>
            set(
                produce((state: CytivaState) => {
                    state.sidebarStatus = status;
                })
            ),
        materials: [],
        stackLights: {
            mat_E_on_1RED: false,
            mat_E_on_2ORANGE: false,
            mat_E_on_3GREEN: false,
            mat_E_on_4BLUE: false,
            mat_E_on_5WHITE: false,
        },
        toggleLamp: (lampName: LampName) =>
            set(
                produce((state: CytivaState) => {
                    state.stackLights[lampName] = !state.stackLights[lampName];
                })
            ),
        animationIsPlaying: false,
        dropdown: false,
        setDropdown: () =>
            set(
                produce((state: CytivaState) => {
                    state.dropdown = !state.dropdown;
                })
            ),
        overlays: {
            trademark: false,
            help: false,
        },
        toggleOverlay: (overlay: Overlays) =>
            set(
                produce((state: CytivaState) => {
                    state.overlays[overlay] = !state.overlays[overlay];
                })
            ),
        closeOverlay: () =>
            set(
                produce((state: CytivaState) => {
                    if (state.overlays.help) state.overlays.help = false;
                    if (state.overlays.trademark)
                        state.overlays.trademark = false;
                })
            ),
    }))
);
