import React from "react";
import classNames from "classnames";
import AngleDown from "assets/angle-down-solid.svg";
export default function CustomSelector({ input, placeholder = "select" }: any) {
  let [menu, openMenu] = React.useState(false);
  let items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
  ];
  let ref = React.useRef(null);
  return (
    <>
      <div
        className={classNames(
          "mt-1 cursor-pointer flex justify-between items-center mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none block w-full rounded-md sm:text-sm",
          { "border-sky-500": menu, "ring-sky-500": menu, "ring-1": menu }
        )}
        onClick={() => {
          openMenu(!menu);
          input.onChange("gogo value");
        }}
      >
        <p ref={ref}>{placeholder}</p>
        <AngleDown width={13} height={13} />
      </div>
      <div
        className={classNames(
          "max-h-0 min-h-auto border border-2 rounded  h-auto overflow-y-hidden transition-all duration-500",
          {
            "!max-h-[200px]": menu,
            "!overflow-y-auto": menu,
            "!border-transparent": !menu,
          }
        )}
      >
        <ul className="w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 mb-2 hover:bg-layout-secondary py-2 w-full"
              onClick={(ele) => {
                let selected = ref.current.innerHTML;
                if (selected === placeholder) {
                  ref.current.innerHTML = item;
                  input.onChange(ref.current.innerHTML.split("/"));
                  console.log("case 1 done");
                } else {
                  if (selected.split("/").indexOf(item) !== -1) {
                    ref.current.innerHTML = selected
                      .split("/")
                      .filter((e: any) => e !== item)
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
                ele.target.classList.toggle("!bg-primary");
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
