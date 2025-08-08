import { AlertSolid, BellSolid, DashboardOutline, HomeOutline, LogoApp, MenuSolid, PingOutline, SearchOutline, ShortOutline, SubscribedOutline, UserOutline, VideoOutline } from "@/assets/svgs";


export const UIAppIcons = {
  LogoApp,
};

export const UIOutlineIcons = {
  VideoOutline,
  SearchOutline,
  HomeOutline,
  ShortOutline,
  SubscribedOutline,
  UserOutline,
  DashboardOutline,
  PingOutline,
};

export const UISolidIcons = {
  MenuSolid: MenuSolid,
  BellSolid,
  AlertSolid
};



export const UIIcons = {
  ...UIOutlineIcons,
  ...UISolidIcons,
  ...UIAppIcons
};
