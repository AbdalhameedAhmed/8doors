import React from 'react';
import { useRouter } from 'next/router';

import { generate } from 'randomized-string';
import classNames from 'classnames';

import MenuItem from './menuItem';
import { menuitemType } from './utils';

import AngleRight from "assets/angle-right-solid.svg"

type menuCollapseType = {
  item: menuitemType;
};

function MenuCollapsibleList({ item }: menuCollapseType): JSX.Element {

  const [open, toggle] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const router = useRouter();

  const submenuLenght = item.submenu ? item.submenu.length : 0;

  const checkListItemsActive = () => {
    const activeItem = item?.submenu?.find((i) => i.path === router.asPath);
    if (!!activeItem) {
      setActive(true);
      toggle(true);
    }
  };

  React.useEffect(() => {
    checkListItemsActive();
  }, []);

  return (
    <MenuItem
      item={item}
      rightIcon={
        <AngleRight
          className={classNames('w-[15px] h-[15px] fill-secondary transition-all ease-in-out duration-300', {
            'rotate-90': open,
          })}
        />
      }
      className={classNames({ '!text-active font-bold': active })}
      onClick={() => {
        toggle(!open);
      }}
    >
      <ul
        className={classNames(
          'hover:text-active overflow-hidden transition-all ease-in-out duration-300'
        )}
        style={{ height: !open ? 0 : 32 * submenuLenght + 40 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {item?.submenu?.map((subI) => (
          <MenuItem
            item={subI}
            key={generate(8)}
            className='text-[15px] !py-[7px] px-[17px] '
            activeStyle='font-bold'
          />
        ))}
      </ul>
    </MenuItem>
  );
}

export default MenuCollapsibleList;
