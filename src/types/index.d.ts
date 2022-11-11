declare global {
    interface Window {
        Sketchfab: any;
    }
}

type Material = {
    channels: {
        AOPBR: {
            enable: boolean;
            factor: number;
            occludeSpecular: boolean;
        };
        AlbedoPBR: { enable: boolean; factor: number; color: number[] };
        AlphaMask: { enable: boolean; factor: number; invert: boolean };
        Anisotropy: {
            enable: boolean;
            factor: number;
            direction: number;
            flipXY: boolean;
        };
        BumpMap: { enable: boolean; factor: number };
        CavityPBR: { enable: boolean; factor: number };
        ClearCoat: {
            enable: boolean;
            factor: number;
            tint: number[];
            thickness: number;
            reflectivity: number;
        };
        ClearCoatNormalMap: { enable: boolean; factor: number; flipY: boolean };
        ClearCoatRoughness: { enable: boolean; factor: number };
        DiffuseColor: {
            enable: boolean;
            factor: number;
            color: number[];
            texture?: { uid: string };
        };
        DiffuseIntensity: { enable: boolean; factor: number; color: number[] };
        DiffusePBR: { enable: boolean; factor: number; color: number[] };
        Displacement: { enable: boolean; factor: number };
        EmitColor: {
            enable: boolean;
            factor: number;
            color: number[];
            type: string;
            texture?: {
                uid?: string;
                internalFormat?: string;
                magFilter?: string;
                minFilter?: string;
                texCoordUnit?: number;
                textureTarget?: string;
                uid?: string;
                wrapS?: string;
                wrapT?: string;
            };
        };
        GlossinessPBR: { enable: boolean; factor: number };
        Matcap: {
            enable: boolean;
            factor: number;
            curvature: number;
            color: number[];
            UVTransforms: {
                offset: number[];
                rotation: number;
                scale: number[];
            };
        };
        MetalnessPBR: { enable: boolean; factor: number };
        NormalMap: { enable: boolean; factor: number; flipY: boolean };
        Opacity: {
            enable: boolean;
            factor: number;
            type: string;
            invert: boolean;
            ior: number;
            refractionColor: number[];
            roughnessFactor: number;
            thinLayer: boolean;
            type: string;
            useAlbedoTint: boolean;
            useMicrosurfaceTexture: true;
            useNormalOffset: boolean;
        };
        RoughnessPBR: { enable: boolean; factor: number };
        Sheen: { enable: boolean; factor: number; colorFactor: number[] };
        SheenRoughness: { enable: boolean; factor: number };
        SpecularColor: { enable: boolean; factor: number; color: number[] };
        SpecularF0: { enable: boolean; factor: number };
        SpecularHardness: { enable: boolean; factor: number };
        SpecularPBR: { enable: boolean; factor: number; color: number[] };
        SubsurfaceScattering: {
            enable: boolean;
            factor: number;
            profile: number;
        };
        SubsurfaceTranslucency: {
            enable: boolean;
            factor: number;
            thicknessFactor: number;
            color: number[];
        };
    };
    cullFace: string;
    id: string;
    name: string;
    reflection: number;
    shadeless: boolean;
    stateSetID: number;
    version: number;
};

type Animation = { [key: string]; [key: string]; [key: number]; [key: number] };

type Annotation = {
    barycentricWeights: string[];
    content: {
        raw: string;
        rendered: string;
    };
    createdAt: string;
    eye: string[];
    geometryUid: number;
    hovered: boolean;
    imageFile: any;
    images: any;
    indices: number[];
    lastComputedScenePosition: number[];
    lastComputedWorldPosition: number[];
    localPosition: number[];
    name: string;
    position: number[];
    preview: string;
    target: number[];
    uid: string;
    uidImage: string;
    updatedAt: string;
    visible: boolean;
};

type SubLink = {
    id: string;
    text: string;
    annotation?: string;
    animations?: string[];
    changeMaterials?: string[];
};

type CustomLink = {
    id: string;
    title: string;
    hasSublinks: boolean;
    subLinks: SubLink[];
};

type Overlays = "trademark" | "help";

interface CytivaState {
    links: CustomLink[];
    apiref: any;
    setApiref: (api: any) => void;
    animations: Animation[];
    setAnimations: (animations: Animation[]) => void;
    viewIsReady: boolean;
    setViewIsReady: (v: boolean) => void;
    sidebarStatus: SidebarVisibility;
    setSidebarStatus: (s: SidebarVisibility) => void;
    annotations: Annotation[];
    setAnnotations: (annotations: Annotation[]) => void;
    // viewStart: boolean;
    // viewLoad: boolean;
    // playAnimation: (animationName: string) => void;
    // stopAnimation: (animationName: string) => void;
    activeNavLink: CustomLink;
    setActiveNavLink: (link: CustomLink) => void;
    activeSubLink: SubLink;
    setActiveSubLink: (subLink: SubLink) => void;
    materials: Material[];
    stackLights: {
        mat_E_on_1RED: boolean;
        mat_E_on_2ORANGE: boolean;
        mat_E_on_3GREEN: boolean;
        mat_E_on_4BLUE: boolean;
        mat_E_on_5WHITE: boolean;
    };
    toggleLamp: (lampName: LampName) => void;
    animationIsPlaying: boolean;
    dropdown: boolean;
    setDropdown: () => void;
    overlays: {
        trademark: boolean;
        help: boolean;
    };
    toggleOverlay: (overlay: Overlays) => void;
    closeOverlay: () => void;
}

export enum SidebarVisibility {
    show = "show",
    notShow = "not-show",
    notSet = "not-set",
}

export enum LampName {
    red = "mat_E_on_1RED",
    yellow = "mat_E_on_2ORANGE",
    green = "mat_E_on_3GREEN",
    blue = "mat_E_on_4BLUE",
    black = "mat_E_on_5WHITE",
}

export type {
    CytivaState,
    CustomLink,
    SubLink,
    Animation,
    Annotation,
    Material,
    Overlays,
};
