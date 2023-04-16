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
        "grow flex mb-[30px] w-full relative rounded-[.1875rem] overflow-hidden bg-secondary text-secondary",
        className
      )}
    >
      <section className={classNames("w-full grow")}>
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
