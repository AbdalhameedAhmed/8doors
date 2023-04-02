import React from "react";
import classNames from "classnames";
import AngleDown from "assets/angle-down-solid.svg";
import { ClassNames } from "@emotion/react";

type props = {
  placeholder: string
  items: string[]
  input: any
  inputStyle?: string
  menuStyle?: string
  dirtyFields?: any
  error?: string | number | any;
  touched?: string | number | any;
  errorActive?: string

}
export default function CustomSingleSelector({ input, placeholder = "select", errorActive, items, inputStyle, menuStyle, error, touched, dirtyFields }: props) {
  let [menu, openMenu] = React.useState(false);
  let [activeLi, changeActiveLi] = React.useState<null | number>(null)
  let ref = React.useRef<HTMLDivElement>(null!);

  return (
    <>
      <div
        className={classNames(
          "mt-1 cursor-pointer flex justify-between items-center px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none block w-full rounded-md sm:text-sm",
          { "border-sky-500": menu, "ring-sky-500": menu, "ring-1": menu, "!mb-4": menu }, inputStyle
        )}
        onClick={() => {
          openMenu(!menu);
          console.log(ref.current.parentElement?.classList.contains("!relative"));
        }}
        {...input}
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
          },
          menuStyle
        )}
      >
        <ul className="w-full">
          {items.map((item: string, index: number) => (
            <li
              key={index}
              className={classNames("px-4 hover:bg-layout-secondary py-2 w-full", { "!bg-primary": index == activeLi, "mb-2": !(index == items.length - 1) })}
              onClick={(ele: React.MouseEvent<HTMLLIElement>) => {
                changeActiveLi(index)

                ref.current.innerHTML = item
                input.onChange(item);

                if (activeLi == index) {
                  ele.target.classList.add("!bg-primary")
                }
                openMenu(!menu)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {error && touched && errorActive === "gender" && <p className={`text-red-500 text-sm mt-2`}>{error}</p>}
    </>
  );
}
