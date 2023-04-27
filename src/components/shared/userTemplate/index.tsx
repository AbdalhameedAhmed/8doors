import classNames from 'classnames';

type Props = {
  title: string;
  subtitle?: string | null | undefined;
  img?: string | null | undefined;
  className?: string;
  circleClassName?: string;
  titleStyle?:string
  textContainer?:string
  subTitleStyle?:string
};

export function UserTemplate({
  title,
  subtitle,
  className = '',
  circleClassName = '',
  titleStyle="",
  textContainer="",
  subTitleStyle="",
  img = null,
}: Props) {
  return (
    <div
      className={classNames(
        'flex items-center gap-4 text-secondary',
        className
      )}
    >
      <div
        className={classNames(
          'flex justify-center items-center bg-theme-secondary border-2 border-white rounded-full !w-[50px] !h-[50px]',
          circleClassName
        )}
      >
        {img ? (
          <img className='w-full h-auto' src={img} alt='' />
        ) : (
          <span className=' text-lg font-medium capitalize text-black'>{title?.charAt(0)}</span>
        )}
      </div>
      <div className={classNames('flex flex-col',textContainer)}>
        {title ? <p className={classNames('text-base font-bold capitalize',titleStyle)}>{title}</p> : null}
        {subtitle ? <span className={classNames('text-normal text-[12px] capitalize',subTitleStyle)}>{subtitle}</span> : null}
      </div>
    </div>
  );
}
