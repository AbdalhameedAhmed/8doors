import classNames from "classnames";

import CustomBtn from "components/shared/button/CustomBtn";

type sectionHeaderTypes = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  btnTitle?:string
  showBtn?:boolean;
  onClick?: () => void;
};

export function SectionHeader({
  title,
  subtitle,
  btnTitle="add",
  showBtn = false,
  className = "",
  onClick = () => { },
}: sectionHeaderTypes) {

  return (
    <div
      className={classNames("p-5 xs:p-3 bg-secondary flex justify-between items-center", className)}
    >
      <h2 className="section-heaeder relative text-[15px] capitalize text-secondary">
        <strong className="text-primary leading-5"><span className="text-xl bold mr-2">|</span> {title} </strong>
        {subtitle?.length && (
          <small className="block text-secondary normal-case ml-4">{subtitle}</small>
        )}
      </h2>
      {showBtn&& 
      <div className="mr-1">
      <CustomBtn className="" onClick={onClick}>
        {btnTitle}
      </CustomBtn>
      </div>
      }
    </div>
  );
}
