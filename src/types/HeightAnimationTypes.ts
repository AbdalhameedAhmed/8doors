import { RefObject } from 'react';

export type HeightAnimationTypes = {
  children: React.ReactNode;
  startanimation: boolean;
  ele: RefObject<HTMLElement>;
  className: string;
};
