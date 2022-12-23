import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { JsxElement } from 'typescript';
interface Props {
  title?: string | number;
  leftIcon?: ReactElement;
  icon?: ReactElement;
  items?: {
    icon?: ReactElement;
    onClick: Function;
    name: string | number;
    id: string | number;
  }[];
}

function DropDown({ icon = <React.Fragment></React.Fragment>, title, items = [] }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="drop-down w-full" style={{}}>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => setToggle((s) => !s)}
      >
        <div className="flex items-center gap-5">
          {icon}
          <h2>{title}</h2>
        </div>
        {toggle ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
      </div>

      <div className={`${toggle ? '' : 'collapse'}`}>
        {items.map((item) => (
          <div className="relative mt-3" key={item?.id}>
            <div
              className="flex gap-5 items-center  pl-5 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => item?.onClick()}
            >
              {item?.icon}
              <h4 className="text-center">{item?.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
