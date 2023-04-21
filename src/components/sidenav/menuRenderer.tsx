import classNames from "classnames";
import { generate } from "randomized-string";

import MenuCollapsibleList from "./menuCollapsableList";
import MenuItem from "./menuItem";
import { menuItemsType } from "./utils";

type RenderMenuItemsProps = {
  list: menuItemsType;
  smallView: boolean
};

export function RenderMenuItems({ list, smallView }: RenderMenuItemsProps) {
  return (
    <ul className={classNames("list-none flex flex-col items-start justify-around gap-2", { "flex": smallView, "flex-col": smallView, "gap-4": smallView, "items-center": smallView })}>
      {list.map((item) => {
        if (!item.submenu?.length) {
          return <MenuItem key={generate(8)} item={item} smallView={smallView} />;
        }
        return <MenuCollapsibleList key={generate(8)} item={item} smallView={smallView} />;
      })}
    </ul>
  );
}
