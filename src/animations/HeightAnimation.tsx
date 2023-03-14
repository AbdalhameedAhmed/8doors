import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";
function HiehgtAnimation({
    children,
    startanimation,
    ele,
    className = "",
}: any) {
    const [springs, api] = useSpring(() => ({
        from: { height: 0 },
        config: { delay: 0, duration: 1000 },
    }));
    useEffect(() => {
        ele &&
            api({
                ...springs,
                to: {
                    height: startanimation ? ele?.current.clientHeight : 0,
                },
            });
    }, [startanimation, ele]);

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

export default HiehgtAnimation;
