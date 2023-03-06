import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  className?: string;
  fit?: boolean;
  icon?: React.ReactElement;
  design?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  onClick?: () => void;
}

export function Button({
  onClick = () => {},
  icon,
  children,
  design = 'primary',
  fit = false,
  className = '',
  ...rest
}: Props) {
  const styles = {
    primary: 'text-white bg-primary border-primary',
    secondary: 'text-secondary bg-secondary border-gray-mid',
    success: '',
    danger: '',
    warning: '',
  };
  return (
    <button
      className={classNames(
        'grow flex justify-center items-center mx-[1px] my-[5px] px-[23px] py-[10px] border rounded-[30px] text-[.8571em] leading-[1.35em] capitalize ',
        { 'max-w-fit': fit },
        className,
        styles[design]
      )}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className='mr-[10px]'>{icon}</span>}
      {children}
    </button>
  );
}
