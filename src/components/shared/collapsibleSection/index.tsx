import React from 'react';
import classNames from 'classnames';
import { Section } from '../section';
import AngleRight from "../../../assets/angle-right-solid.svg"
import Plus from "../../../assets/plus-solid.svg"

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  headerClassName?: string;
  childernClassName?: string;
  hasAction: boolean | undefined;
  onAction: Function;
  modalTitle: string | null | undefined
};

export function CollapsibleSection({
  children,
  title,
  subtitle,
  className = '',
  headerClassName = '',
  childernClassName = '',
  onAction,
  modalTitle
}: Props) {

  const [open, toggle] = React.useState(false);


  return (
    <Section
      className={classNames('relative', className)}
      title={title}
      subtitle={subtitle}
      onClick={() => toggle(!open)}
      headerClassName={classNames('cursor-pointer', headerClassName)}
      childernClassName={open ? childernClassName : '!py-0'}
    >
      <AngleRight
        className={classNames(
          'w-[15px] h-[15px] fill-secondary absolute top-[25px] right-[33px] transition-all ease-in-out duration-300',
          { 'rotate-90': open }
        )}
        onClick={() => toggle(!open)}
      />
      <Plus
        className={classNames(
          'w-[15px] h-[15px] fill-secondary absolute top-[25px] right-[52px] cursor-pointer transition-all ease-in-out duration-300',
        )}
        onClick={() => onAction(modalTitle)}
      />


      <div
        className={classNames(
          'transition-height overflow-hidden ease-in-out duration-200',
          { 'h-full': open, 'h-0': !open }
        )}
      >
        {children}
      </div>
    </Section>
  );
}