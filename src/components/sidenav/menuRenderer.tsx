import { generate } from 'randomized-string';
import MenuCollapsibleList from './menuCollapsableList';
import MenuItem from './menuItem';
import { menuItemsType } from './utils';

type RenderMenuItemsProps = {
  list: menuItemsType
}

export function RenderMenuItems({list}: RenderMenuItemsProps) {
  return (
    <ul className='list-none'>
      {list.map((item) => {
        if (!item.submenu?.length) {
          return <MenuItem key={generate(8)} item={item} />;
        }
        return <MenuCollapsibleList key={generate(8)} item={item} />
      })}
    </ul>
  )
}
