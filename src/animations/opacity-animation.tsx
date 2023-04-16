import React from "react";

import { useSpring, animated } from "@react-spring/web";

import {OpacityAnimationTypes} from "types/OpacityAnimationTypes"

export const OpacityAnimation = ({ booleanValue, children }: OpacityAnimationTypes) => {

  const fadeStyles = useSpring({

    from: { opacity: 0 },

    to: {
      opacity: booleanValue ? 1 : 0,
    },
    
    config: { duration: 100 },

  });

  return (
    <animated.div style={fadeStyles}>
      {children}
    </animated.div>
  );
};

export default OpacityAnimation;
