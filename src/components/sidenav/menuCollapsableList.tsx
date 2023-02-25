import MenuItem from './menuItem';
import { menuitemType } from './utils';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { generate } from 'randomized-string';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  item: menuitemType;
};

function MenuCollapsibleList({ item }: Props): JSX.Element {
  const router = useRouter();
  const [open, toggle] = React.useState(false);
  const [active, setActive] = React.useState(false);

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
        <FontAwesomeIcon
          icon={faAngleRight}
          className={classNames('w-[10px] h-[10px] transition-all ease-in-out duration-300', {
            'rotate-90': open,
          })}
        />
      }
      className={classNames({ '!text-primary font-bold': active })}
      onClick={() => {
        toggle(!open);
      }}
    >
      <ul
        className={classNames(
          'hover:text-primary overflow-hidden transition-all ease-in-out duration-300'
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
