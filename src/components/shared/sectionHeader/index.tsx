import classNames from "classnames";

import CustomBtn from "components/shared/button/CustomBtn";

type sectionHeaderTypes = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  btnTitle?: string
  deactivatedTitle?: string
  newSubtitle?: string[]
  showBtn?: boolean;
  subtitleStyle?: string
  onClick?: () => void;
};

export function SectionHeader({
  title,
  subtitle,
  btnTitle = "add",
  showBtn = false,
  deactivatedTitle = "",
  subtitleStyle,
  newSubtitle,
  className = "",
  onClick = () => { },
}: sectionHeaderTypes) {

  return (
    <div
      className={classNames("py-5 xs:py-3 bg-primary flex justify-between items-center", className)}
    >
      <div className="section-heaeder relative text-[15px] capitalize text-secondary">
        <h4 className="text-primary text-[1.5rem] font-[700] !mb-2"> {title} </h4>
        {subtitle?.length && (
          // <p className={classNames("block text-secondary normal-case", subtitleStyle)}>{subtitle}</p>
          subtitle.split(".").map((sub, index) => (
            <div key={index} className="inline">
              <a className={classNames("hover:underline cursor-default", subtitleStyle, { "hover:no-underline text-gray-400": subtitle.split(".").length - 1 == index })}>{sub}</a>
              {
                subtitle.split(".").length - 1 !== index &&
                <span className="mx-4 w-[4px] inline-block h-[4px] rounded-full bg-black"></span>
              }
            </div>
          ))
        )}

      </div>
      {/* {showBtn &&
        <div className="mr-1">
          <CustomBtn className="" onClick={onClick}>
            {btnTitle}
          </CustomBtn>
        </div>
      } */}
    </div>
  );
}
