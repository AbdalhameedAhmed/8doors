import classNames from "classnames";

import { SectionHeader } from "../sectionHeader";
import { sectionTypes } from "types/sectionTypes"

export function Section({
  children,
  title,
  sectionHeaderBtnTitle = "Add",
  sectionHeaderBtnVisibility = false,
  sectionHeaderBtnHandler = () => { },
  subtitle,
  newSubtitle,
  subtitleStyle,
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
        "relative rounded-[.1875rem] w-full px-8 mx-auto bg-secondary text-secondary",
        className
      )}
    >
      <section className={classNames("w-full grow relative")}>
        <div
          className={classNames(
            "py-5 xs:py-3 ease-in-out duration-300",
            childernClassName
          )}
        >
          {title?.length && (

            <SectionHeader
              btnTitle={sectionHeaderBtnTitle}
              showBtn={sectionHeaderBtnVisibility}
              onClick={sectionHeaderBtnHandler}
              className={headerClassName}
              title={title}
              newSubtitle={newSubtitle}
              subtitleStyle={subtitleStyle}
              subtitle={subtitle}
            />

          )}
          {children}
        </div>
      </section>
    </div>
  );
}
