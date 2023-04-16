import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";
import { HeightAnimationTypes } from "types/HeightAnimationTypes"


function HeightAnimation({
    children,
    startanimation,
    ele,
    className = "",
}: HeightAnimationTypes) {

    const [springs, api] = useSpring(() => ({

        from: { height: 0 },
        config: { delay: 0, duration: 200 }

    }));

    useEffect(() => {
        api({
            ...springs,
            to: {
                height: startanimation ? ele?.current?.clientHeight : 0,
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

export default HeightAnimation;
