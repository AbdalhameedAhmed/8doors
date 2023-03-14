import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode | string;
    className?: string;
    fit?: boolean;
    type?: "button" | "submit";
    design?: "fullwidth" | "block";
    onClick?: () => void;
}

export default function CustomBtn({
    onClick = () => { },
    children,
    design = "block",
    type = "button",
    fit = false,
    className = "",
    ...rest
}: Props) {
    return (
        <button
            className={classNames(
                "modalBtn bg-primary border-[1px] py-[5px] text-secondary px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation",
                { "w-full": fit },
                className
            )}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
}
