import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightLong,
  faCalendarCheck,
  faGear,
  faHome,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

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
    icon: <FontAwesomeIcon icon={faHome} className='w-[14px] h-[14px]' />,
    submenu: [],
    display: true,
    path: '/',
  },
  {
    label: 'Appointments',
    icon: (
      <FontAwesomeIcon icon={faCalendarCheck} className='w-[14px] h-[14px]' />
    ),
    submenu: [],
    display: true,
    path: '/appointments',
  },
  {
    label: 'Doctors',
    icon: <FontAwesomeIcon icon={faUserPlus} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctors',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-doctor',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-profile',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <FontAwesomeIcon icon={faUser} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/dctors',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dotor',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-prfile',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <FontAwesomeIcon icon={faUser} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/dotors',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dctor',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-pofile',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Patients',
    icon: <FontAwesomeIcon icon={faUser} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctrs',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-dctor',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-rofile',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Configuration',
    icon: <FontAwesomeIcon icon={faGear} className='w-[14px] h-[14px]' />,
    submenu: [],
    display: true,
    path: '/configuration',
    static: true,
  },
];
