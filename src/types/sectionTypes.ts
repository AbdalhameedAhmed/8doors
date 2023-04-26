export type sectionTypes = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  newSubtitle?:string[]
  className?: string;
  sectionHeaderBtnTitle?: string;
  sectionHeaderBtnVisibility?: boolean;
  sectionHeaderBtnHandler?: () => void;
  childernClassName?: string;
  subtitleStyle?:string;
  headerClassName?: string;
  onClick?: () => void;
};