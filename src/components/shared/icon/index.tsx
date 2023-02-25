import { IconContext } from 'react-icons';
import classNames from 'classnames';
import React from 'react';

type Props = {
  color: string | undefined;
  size: string | undefined;
  icon: React.ReactElement | React.ReactNode;
  className?: string;
  hoverColor?: string | null | undefined;
};
export function ReactIcon({
  color,
  icon,
  size,
  className = '',
  hoverColor = null,
  ...rest
}: Props) {
  const [appliedColor, setAppliedColor] = React.useState(color);

  const resetColor = () => {
    !!hoverColor && setAppliedColor(color);
  };

  const changeColorHover = () => {
    !!hoverColor && setAppliedColor(hoverColor);
  };

  return (
    <IconContext.Provider value={{ color: appliedColor, size: size }}>
      <div
        {...rest}
        onMouseEnter={changeColorHover}
        onMouseLeave={resetColor}
        className={classNames(
          'cursor-pointer ease-in-out duration-300 group',
          className
        )}
      >
        {icon}
      </div>
    </IconContext.Provider>
  );
}
