import React from "react";
import ArrowLongRight from "assets/arrow-right-long-solid.svg";
import Home from "assets/house-solid.svg";
import CalendarCheck from "assets/calendar-check-solid.svg";
import UserPlus from "assets/user-plus-solid.svg";
import User from "assets/user-solid.svg";

export type menuitemType = {
  label?: string;
  icon?: React.ReactElement;
  path: string;
  display?: boolean;
  submenu?: menuItemsType;
  static?: boolean;
};

export type menuItemsType = menuitemType[];

export const mainMenuItems: menuItemsType = [
  {
    label: "Dashboard",
    icon: (
      <Home className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    submenu: [],
    display: true,
    path: "/clinic-dashboard",
  },
  {
    label: "Appointments",
    icon: (
      <CalendarCheck className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    submenu: [],
    display: true,
    path: "/appointments",
  },
  {
    label: "Doctors",
    icon: (
      <UserPlus className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    display: true,
    path: "",
    submenu: [
      {
        label: "All Doctors",
        display: true,
        path: "/doctors",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Add Doctor",
        display: true,
        path: "/add-doctor",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Doctor Profile",
        display: true,
        path: "/doctor-profile",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
    ],
  },
  {
    label: "Doctors",
    icon: (
      <UserPlus className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    display: true,
    path: "",
    submenu: [
      {
        label: "All Doctors",
        display: true,
        path: "/doctors",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Add Doctor",
        display: true,
        path: "/add-doctor",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Doctor Profile",
        display: true,
        path: "/doctor-profile",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
    ],
  },
  {
    label: "Doctors",
    icon: (
      <UserPlus className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    display: true,
    path: "",
    submenu: [
      {
        label: "All Doctors",
        display: true,
        path: "/doctors",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Add Doctor",
        display: true,
        path: "/add-doctor",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
      {
        label: "Doctor Profile",
        display: true,
        path: "/doctor-profile",
        icon: <ArrowLongRight className="fill-secondary w-[10px]" />,
      },
    ],
  },
  {
    label: "Staff",
    icon: (
      <User className="fill-secondary group-hover:fill-primary w-[16px] h-[16px]" />
    ),
    submenu: [],
    display: true,
    path: "/staff",
    static: true,
  },
];
