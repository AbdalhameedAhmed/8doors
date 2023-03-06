import classNames from 'classnames';
import { SectionHeader } from '../sectionHeader';

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  childernClassName?: string;
  headerClassName?: string;
  onClick?: () => void;
};

export function Section({
  children,
  title,
  subtitle,
  className = '',
  headerClassName = '',
  childernClassName = '',
  onClick = () => { },
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        'grow flex px-[15px] mb-[30px] w-full relative rounded-[.1875rem] overflow-hidden bg-secondary text-secondary',
        className
      )}
    >
      <section className={classNames('w-full grow')}>
        {title?.length && (<>
          <SectionHeader onClick={onClick} className={headerClassName} title={title} subtitle={subtitle} />
        </>
        )}
        <div
          className={classNames(
            'p-5 ease-in-out duration-300',
            childernClassName
          )}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
