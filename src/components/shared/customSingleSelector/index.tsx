import React from "react";

import classNames from "classnames";

import { singleSelectorTypes } from "types/singleSelectorTypes"

import AngleDown from "assets/angle-down-solid.svg";
import { useOnClickOutside } from "usehooks-ts";

export default function CustomSingleSelector(props: singleSelectorTypes) {

  const { input, containerStyle, placeholder = "select", errorActive, options, inputStyle, menuStyle, error, touched, floatMenu = false, onActiveLi = () => { } } = props
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")

  let [menu, openMenu] = React.useState(false);
  let [activeLi, changeActiveLi] = React.useState<null | number>(null)
  let [initialState, setInitialState] = React.useState(true)

  let ref = React.useRef<HTMLDivElement>(null!);
  let selectorRef = React.useRef<HTMLDivElement>(null!);


  useOnClickOutside(selectorRef, () => { openMenu(false) })

  const handelLiClick = (index: number, title: string, id: number, value: number | string) => {
    changeActiveLi(index)
    ref.current.innerHTML = title
    input.onChange(value);
    onActiveLi(id)
    openMenu(false)
  }

  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

  }, [])

  React.useEffect(() => {

    if (input.value && initialState) {
      options.map((item, index) => {

        if (item.value == input.value) {
          setInitialState(false)
          console.log(item.title);
          handelLiClick(index, item.title, item.id, item.value)
        }
      })
    }

  }, [input.value, options])

  return (
    <div className={classNames(containerStyle)} ref={selectorRef}>
      <div
        className={classNames(
          "cursor-pointer flex justify-between items-center options-center px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none block w-full rounded-md sm:text-sm",
          { "!border-red-500": error && errorActive, "mt-4 !border-b-transparent rounded-b-none": menu, "!border-floating-border": menu && !error, "flex-row-reverse": direction === "rtl", "!bg-stone-200 border-stone-200 cursor-not-allowed": !options.length }, inputStyle
        )}

        onClick={() => {
          options.length && openMenu(!menu);
        }}

        {...input}
      >
        <p ref={ref} className={`text-sm ${activeLi === null && "!text-[rgba(107,114,128)]"} `}>{placeholder}</p>
        <AngleDown width={13} height={13} />
      </div>
      <div
        className={classNames(
          "max-h-0 border-0 rounded  h-auto overflow-y-hidden transition-all duration-500",
          {
            "!max-h-[200px] !border-2 !overflow-y-auto mb-4": menu,
            "!border-transparent": !menu,
            "absolute top-[58px] left-0 w-full z-20 bg-white": floatMenu,
          },
          menuStyle
        )}
      >
        <ul className={classNames("w-full", { "text-left": direction === "rtl" })}>
          {options && options.map((item, index: number) => {

            // if (item.value === input.value) {
            //   // handelLiClick(index, item.title, item.id, item.value)
            //   console.log("done",item.value);

            // }

            return (
              (
                <li
                  key={item?.id}
                  className={classNames("px-4 hover:bg-layout-secondary py-2 w-full", { "!bg-layout-secondary": index == activeLi, "mb-2": !(index == options.length - 1) })}
                  onClick={(ele: React.MouseEvent<HTMLLIElement>) => {
                    handelLiClick(index, item.title, item.id, item.value)
                  }}
                >
                  {item.title}
                </li>
              )
            )
          }

          )}
        </ul>
      </div>
      {error && errorActive && <p className={`text-red-500 text-sm mt-2`}>{error}</p>}
    </div>

  );
}
