import React from "react";
import classNames from "classnames";
import AngleDown from "assets/angle-down-solid.svg";
import Check from "assets/check-solid.svg"
import useOnClickOutside from "hooks/useOnClickOutside"
import {multipleSelectorTypes} from "types/multipleSelectorTypes"
export default function CustomSelector(props: multipleSelectorTypes) {
  const { input, errorActive,containerStyle, placeholder = "select", options, inputStyle, menuStyle, error, touched } = props
  let [menu, openMenu] = React.useState(false);
  let inputTitleRef = React.useRef<HTMLDivElement>(null!);
  let menuRef = React.useRef<HTMLDivElement>(null!);
  useOnClickOutside(menuRef, () => openMenu(false));
  return (
    <div className={classNames(containerStyle)}>
     <div
        className={classNames(
          "cursor-pointer flex justify-between items-center px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none block w-full rounded-md sm:text-sm",
          { "border-sky-500": menu,"border-b-transparent": menu,"rounded-b-none": menu, "ring-sky-500": menu, "ring-1": menu, "!mt-4": menu }, inputStyle
        )}
        onClick={() => {
          openMenu(!menu);
        }}
      >
        <p ref={inputTitleRef}>{placeholder}</p>
        <AngleDown width={13} height={13} />
      </div>
      <div
        className={classNames(
          "max-h-0 border border-2 rounded  h-auto overflow-y-hidden transition-all duration-500",
          {
            "!max-h-[200px]": menu,
            "!overflow-y-auto": menu,
            "!border-transparent": !menu,
            "mb-4": menu
          },
          menuStyle
        )}
        ref={menuRef}
      >
        <ul className="w-full">
          {options.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className={classNames("px-4 hover:bg-layout-secondary py-2 w-full", { "mb-2": !(index == options.length - 1) })}
                onClick={(ele: React.MouseEvent<HTMLLIElement>) => {
                  let selected = inputTitleRef.current.innerHTML;
                  if (selected === placeholder) {
                    inputTitleRef.current.innerHTML = item;
                    input.onChange(inputTitleRef.current.innerHTML.split("/"));
                  } else {
                    if (selected.split("/").indexOf(item) !== -1) {
                      inputTitleRef.current.innerHTML = selected
                        .split("/")
                        .filter((e: string) => e !== item)
                        .join("/");
                      input.onChange(inputTitleRef.current.innerHTML);
                      if (!inputTitleRef.current.innerHTML) {
                        inputTitleRef.current.innerHTML = placeholder;
                        input.onChange("");
                      }
                    } else {
                      inputTitleRef.current.innerHTML = `${inputTitleRef.current.innerHTML}/${item}`;
                      input.onChange(inputTitleRef.current.innerHTML.split("/"));
                    }
                  }
                  (ele.target as HTMLElement).classList.toggle("!text-primary");
                  (ele.target as HTMLElement).classList.toggle("[&_p_svg]:!opacity-100");
                  (ele.target as HTMLElement).classList.toggle("[&_p_svg]:!-right-[20px]");
                }}
              >
                <p className="relative inline-block">
                  {item} <Check width={15} height={15} className="absolute top-1/2 -translate-y-1/2 opacity-0 right-[0px] fill-primary transition-all duration-300" />
                </p>
              </li>
            )
          }

          )}
        </ul>
      </div>
      {error && touched && errorActive === input.name && <p className={`text-red-500 text-sm mt-2`}>{error}</p>}
    </div>
  );
}
