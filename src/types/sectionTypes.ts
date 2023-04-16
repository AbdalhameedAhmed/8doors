export type sectionTypes = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  sectionHeaderBtnTitle?: string;
  sectionHeaderBtnVisibility?: boolean;
  sectionHeaderBtnHandler?: () => void;
  childernClassName?: string;
  headerClassName?: string;
  onClick?: () => void;
};