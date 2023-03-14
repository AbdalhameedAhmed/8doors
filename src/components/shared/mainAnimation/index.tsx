import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";
function MainAnimation({ children, startanimation, className = "" }: any) {
  const [springs, api] = useSpring(() => ({
    from: { y: -1000, opacity: 0 },
    config: { delay: 0, duration: 300 }
  }));
  useEffect(() => {
    api.start({
      to: {
        y: startanimation ? 0 : -1000,
        opacity: startanimation ? 1 : 0,
      },
    });
  }, [startanimation]);

  return (
    <>
      <animated.div
        className={classNames(className)}
        style={{
          ...springs,
        }}
      >
        {children}
      </animated.div>
    </>
  );
}

export default MainAnimation;
