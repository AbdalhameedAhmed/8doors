import { menuItemsType } from "components/sidenav/utils";
import { dashboardItemsType } from "components/sidenav/dashboardUtils"

export type SideNavProps = {
  toggle: boolean;
  smallView:boolean;
  changeSmallView:Function;
  setToggle: Function;
  sideNavItems: menuItemsType | dashboardItemsType
};