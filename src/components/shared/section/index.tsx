import classNames from "classnames";

import { SectionHeader } from "../sectionHeader";
import {sectionTypes} from "types/sectionTypes"

export function Section({
  children,
  title,
  sectionHeaderBtnTitle = "Add",
  sectionHeaderBtnVisibility = false,
  sectionHeaderBtnHandler = () => { },
  subtitle,
  className = "",
  headerClassName = "",
  childernClassName = "",
  onClick = () => { },
  ...rest
}: sectionTypes) {

  return (
    <div
      {...rest}
      className={classNames(
        "grow flex w-full relative rounded-[.1875rem] bg-secondary text-secondary",
        className
      )}
    >
      <section className={classNames("w-full grow relative")}>
        {title?.length && (
          <>
            <SectionHeader
              btnTitle={sectionHeaderBtnTitle}
              showBtn={sectionHeaderBtnVisibility}
              onClick={sectionHeaderBtnHandler}
              className={headerClassName}
              title={title}
              subtitle={subtitle}
            />
          </>
        )}
        <div
          className={classNames(
            "p-5 xs:p-3 ease-in-out duration-300",
            childernClassName
          )}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
