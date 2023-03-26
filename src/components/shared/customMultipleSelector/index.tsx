import React from "react";
import classNames from "classnames";
import AngleDown from "assets/angle-down-solid.svg";
import Check from "assets/check-solid.svg"
type props = {
  placeholder: string
  items: string[]
  input: any
}
export default function CustomSelector({ input, placeholder = "select", items }: props) {
  let [menu, openMenu] = React.useState(false);
  let ref = React.useRef<HTMLDivElement>(null!);
  return (
    <>
      <div
        className={classNames(
          "mt-1 cursor-pointer flex justify-between items-center mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none block w-full rounded-md sm:text-sm",
          { "border-sky-500": menu, "ring-sky-500": menu, "ring-1": menu }
        )}
        onClick={() => {
          openMenu(!menu);
        }}
      >
        <p ref={ref}>{placeholder}</p>
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
          }
        )}
      >
        <ul className="w-full">
          {items.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className={classNames("px-4 hover:bg-layout-secondary py-2 w-full", { "mb-2": !(index == items.length - 1) })}
                onClick={(ele: React.MouseEvent<HTMLLIElement>) => {
                  let selected = ref.current.innerHTML;
                  if (selected === placeholder) {
                    ref.current.innerHTML = item;
                    input.onChange(ref.current.innerHTML.split("/"));
                  } else {
                    if (selected.split("/").indexOf(item) !== -1) {
                      ref.current.innerHTML = selected
                        .split("/")
                        .filter((e: string) => e !== item)
                        .join("/");
                      input.onChange(ref.current.innerHTML);
                      if (!ref.current.innerHTML) {
                        ref.current.innerHTML = placeholder;
                        input.onChange("");
                      }
                    } else {
                      ref.current.innerHTML = `${ref.current.innerHTML}/${item}`;
                      input.onChange(ref.current.innerHTML.split("/"));
                    }
                  }
                  ele.target.classList.toggle("!text-primary");
                  ele.target.classList.toggle("[&_p_svg]:!opacity-100");
                  ele.target.classList.toggle("[&_p_svg]:!-right-[20px]");
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
    </>
  );
}
