import React from "react";
import Home from "assets/house-solid.svg";
export type dashboardItemType = {
  label?: string;
  icon?: React.ReactElement;
  path: string;
  display?: boolean;
  submenu?: dashboardItemsType;
  static?: boolean;
};

export type dashboardItemsType = dashboardItemType[];

export const dashboardItems: dashboardItemsType = [
  {
    label: "Dashboard",
    icon: (
      <Home className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    submenu: [],
    display: true,
    path: "/dashboard",
  },
];
