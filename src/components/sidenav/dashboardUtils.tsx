import React from "react";

import ArrowLongRight from "assets/arrow-right-long-solid.svg";
import Gear from "assets/gear-solid.svg"
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
  {
    label: "Settings",
    icon: (
      <Gear className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    display: true,
    path: "",
    submenu: [
      {
        label: "Change password",
        display: true,
        path: "/settings/change-password",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
    ],
  },
];
