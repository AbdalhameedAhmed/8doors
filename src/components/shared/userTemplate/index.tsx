import classNames from 'classnames';

type Props = {
  title: string;
  subtitle?: string | null | undefined;
  img?: string | null | undefined;
  className?: string;
  circleClassName?: string;
};

export function UserTemplate({
  title,
  subtitle,
  className = '',
  circleClassName = '',
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
          'flex justify-center items-center bg-layout-secondary border-2 border-white rounded-full !w-[50px] !h-[50px]',
          circleClassName
        )}
      >
        {img ? (
          <img className='w-full h-auto' src={img} alt='' />
        ) : (
          <span className='text-white text-lg font-medium'>{title?.charAt(0)}</span>
        )}
      </div>
      <div className='flex flex-col'>
        {title ? <p className='text-base font-bold'>{title}</p> : null}
        {subtitle ? <span className='text-normal text-[12px]'>{subtitle}</span> : null}
      </div>
    </div>
  );
}
