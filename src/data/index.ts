import { CustomLink } from "../types";

export enum SubLinkId {
  configurable = "1-1",
  scalable = "1-2",
  turnkeySolution = "2-1",
  unicornSoftware = "2-2",
  flexibleAutomation = "2-3",
  largeDisplay = "3-1",
  stackLight = "3-2",
  cleanInPlace = "3-3",
  valveDesign = "3-4",
  columnPacking = "4",
  bufferManagement = "5",
  uvSensor = "6-1",
  phSensor = "6-2",
  pumpAndFlow = "6-3",
}

export const links: CustomLink[] = [
  {
    id: "1",
    title: "Flexible design",
    hasSublinks: true,
    subLinks: [
      { id: "1-1", text: "Configurable", annotation: "Configurable" },
      { id: "1-2", text: "Scalable" },
    ],
  },
  {
    id: "2",
    title: "Automation",
    hasSublinks: true,
    subLinks: [
      { id: "2-1", text: "Turnkey solution", annotation: "Turnkey solution" },
      { id: "2-2", text: "UNICORN™ software", annotation: "HMI" },
      {
        id: "2-3",
        text: "Flexible automation",
        annotation: "Flexible automation",
      },
    ],
  },
  {
    id: "3",
    title: "Convenient operations",
    hasSublinks: true,
    subLinks: [
      { id: "3-1", text: "Large display", annotation: "HMI" },
      { id: "3-2", text: "Stack light", annotation: "Stack-light" },
      {
        id: "3-3",
        text: "Clean-in-place",
        annotation: "hsp_buffr",
        animations: ["hsp_cip_2_start", "hsp_cip_2_end"],
        changeMaterials: ["mat_EXTERN_cip"],
      },
      {
        id: "3-4",
        text: "Valve design",
        annotation: "Swivel mount of valves 2",
        animations: ["hsp_swiv_BOTH"],
      },
    ],
  },
  {
    id: "4",
    title: "Column packing",
    hasSublinks: false,
    subLinks: [
      {
        id: "4",
        text: "Column packing",
        annotation: "hsp_col_pack",
        animations: ["hsp_col_pack_2_start", "hsp_col_pack_2_end"],
        changeMaterials: ["mat_EXTERN_col-pack"],
      },
    ],
  },
  {
    id: "5",
    title: "Buffer management",
    hasSublinks: false,
    subLinks: [
      {
        id: "5",
        text: "Buffer management",
        annotation: "hsp_buffr",
        animations: ["hsp_buffr_mgmnt_start", "hsp_buffr_mgmnt_end"],
        changeMaterials: [
          "mat_EXTERN_buff-m",
          "mat_A_PUMP",
          "mat_B_PUMP",
          "mat_C_LABELS_PUMP",
          "plastic_black_PUMP",
          "plastic_white_PUMP",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Process control",
    hasSublinks: true,
    subLinks: [
      {
        id: "6-1",
        text: "UV instrument",
        annotation: "UV sensor",
        changeMaterials: ["mat_B"],
      },
      { id: "6-2", text: "pH sensor", annotation: "pH sensor" },
      {
        id: "6-3",
        text: "Pump and flow meter",
        annotation: "Pump flow meter",
      },
    ],
  },
];
