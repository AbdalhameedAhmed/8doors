import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { JsxElement } from 'typescript';
interface Props {
  title?: string | number;
  leftIcon?: ReactElement;
  icon?: ReactElement;
  items?: { link: string | number; name: string | number; id: string | number }[];
}

function DropDown({ icon = <React.Fragment></React.Fragment>, title, items = [] }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <li className="relative">
      {icon}
      <span onClick={() => setToggle((s) => !s)}>{title}</span>
      <FontAwesomeIcon icon={faCaretDown} onClick={() => setToggle((s) => !s)} />
      <ul className={`relative accordion-collapse ${toggle ? '' : 'collapse'}`}>
        {items.map((item) => (
          <li className="relative" key={item?.id}>
            <Link
              href={`/${item?.link}`}
              className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Link 1
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropDown;
