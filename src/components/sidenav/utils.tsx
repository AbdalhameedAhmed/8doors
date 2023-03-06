import React from 'react';
import ArrowLongRight from "assets/arrow-right-long-solid.svg"
import Home from "assets/house-solid.svg"
import CalendarCheck from "assets/calendar-check-solid.svg"
import UserPlus from "assets/user-plus-solid.svg"
import User from "assets/user-solid.svg"
import Gear from "assets/gear-solid.svg"

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
    label: 'Dashboard',
    icon: <Home className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    submenu: [],
    display: true,
    path: '/',
  },
  {
    label: 'Appointments',
    icon: (
      <CalendarCheck className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />
    ),
    submenu: [],
    display: true,
    path: '/appointments',
  },
  {
    label: 'Doctors',
    icon: <UserPlus className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctors',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-doctor',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-profile',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <User className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/dctors',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dotor',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-prfile',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <User className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/dotors',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dctor',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-pofile',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <User className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctrs',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dctor',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-rofile',
        icon: <ArrowLongRight className='fill-secondary w-[10px]' />,
      },
    ],
  },
  {
    label: 'Configuration',
    icon: <Gear className='fill-secondary group-hover:fill-primary w-[16px] h-[16px]' />,
    submenu: [],
    display: true,
    path: '/configuration',
    static: true,
  },
];
