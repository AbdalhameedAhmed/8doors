import { useState, useEffect } from 'react';

import styles from './style.module.css';

type transitionTypes = {
  children?: React.ReactNode;
};

export default function TransitionLayout({ children }: transitionTypes) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayChildren(children);
          setTransitionStage('fadeIn');
        }
      }}
      className={`${styles.content} ${styles[transitionStage]}`}
    >
      {displayChildren}
    </div>
  );
}
