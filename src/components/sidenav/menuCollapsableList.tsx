import React from 'react';
import { useRouter } from 'next/router';

import { generate } from 'randomized-string';
import classNames from 'classnames';

import MenuItem from './menuItem';
import { menuitemType } from './utils';

import AngleRight from "assets/angle-right-solid.svg"

type menuCollapseType = {
  item: menuitemType;
  smallView: boolean;
};

function MenuCollapsibleList({ item, smallView }: menuCollapseType): JSX.Element {

  const [open, toggle] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const router = useRouter();
  const ulRef = React.useRef(null)


  const submenuLenght = item.submenu ? item.submenu.length : 0;

  const checkListItemsActive = () => {
    const activeItem = item?.submenu?.find((i) => i.path === router.asPath);
    if (!!activeItem) {
      setActive(true);
      !smallView && toggle(true);
    }
  };

  React.useEffect(() => {
    checkListItemsActive();
  }, [smallView]);

  return (
    <MenuItem
      item={item}
      rightIcon={
        <AngleRight
          className={classNames('w-[15px] h-[15px] fill-secondary  transition-all ease-in-out duration-300', {
            'rotate-90': open, "absolute right-[5px] top-[10px] !rotate-0 w-[10px] h-[10px]": smallView
          })}
        />
      }
      smallView={smallView}
      className={classNames("group-hover:bg-layout-secondary", { '!text-active font-bold [&_svg]:fill-primary': active })}
      textContainerStyle='group-hover:text-active '
      onClick={() => {
        toggle(!open);

      }}
    >
      <ul
        className={classNames(
          'hover:text-active overflow-hidden transition-all ease-in-out duration-500 '
          , { "absolute -right-[220px] top-1/2 -translate-y-1/2 w-[220px] bg-[#ffffffc4] z-50 rounded-xl flex flex-col items-start justify-evenly !shadow-lg !p-0 opacity-0 scale-0 group-hover:!scale-100 group-hover:!opacity-100 origin-[0%_50%]": smallView, " backdrop-blur-[6px] !p-2 !h-fit": smallView,"!mt-2":!smallView && open })}
        style={{ height: !open && !smallView ? 0 : 32 * submenuLenght + (smallView? 40:10) }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {item?.submenu?.map((subI) => (
          <MenuItem
            item={subI}
            removeIcon={true}
            key={generate(8)}
            className={classNames('text-[15px] !py-[7px] group-hover:bg-transparent hover:!bg-layout-secondary', { "[&_svg]:fill-primary text-primary": subI.path === router.asPath, })}
            activeStyle='font-bold'
          />
        ))}
      </ul>
    </MenuItem>
  );
}

export default MenuCollapsibleList;
