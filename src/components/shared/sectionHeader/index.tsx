import classNames from "classnames";

type Props = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  onClick?: () => void;
};

export function SectionHeader({
  title,
  subtitle,
  className = "",
  onClick = () => {},
}: Props) {
  const first = title?.split(" ")[0];
  const rest = title?.split(" ").slice(1).join(" ");

  return (
    <div
      className={classNames("p-5 bg-secondary", className)}
      onClick={onClick}
    >
      <h2 className="section-heaeder relative text-[15px] capitalize text-secondary">
        <strong className="text-primary leading-5">{first} </strong>
        {rest}
        {subtitle?.length && (
          <small className="block text-secondary normal-case">{subtitle}</small>
        )}
      </h2>
    </div>
  );
}
