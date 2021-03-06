import {useEffect, useState} from "react";
import {
    V_DIRECTION_LIMIT,
    H_DIRECTION_LIMIT,
    SCROLL_STEPS_LIMIT,
    SCROLL_DELTA,
    H_DIRECTION,
    V_DIRECTION
} from "../constants/settings";
import {getDirection} from "./utils";

export function useScrollControl(elementRef, scrollEnabled) {
    const [scrollControlData, setScrollControlData] = useState(
        {
            line: 0,
            direction: getDirection(window.innerWidth)
        }
    );

    useEffect(() => {
        if (!elementRef.current) return;

        function wheelHandler(event) {
            if (!scrollEnabled || window.innerWidth <= V_DIRECTION_LIMIT) return;

            // В силу определенных ограничений функции scrollTo из JS, я решил написать свой вариант этой функции
            function scrollTo(delta, steps = 0) {
                const curScrollLeft = elementRef.current.scrollLeft;
                elementRef.current.scrollLeft += delta;
                if (elementRef.current.scrollLeft !== curScrollLeft && steps < SCROLL_STEPS_LIMIT) {
                    requestAnimationFrame(() => scrollTo(delta, steps + 1));
                }
            }

            const {deltaY} = event;
            if (deltaY < 0) requestAnimationFrame(() => scrollTo(-SCROLL_DELTA));
            if (deltaY > 0) requestAnimationFrame(() => scrollTo(SCROLL_DELTA));
        }

        let oldWidth = window.innerWidth;

        function resizeHandler() {
            const curWidth = window.innerWidth;
            const f1 = oldWidth <= V_DIRECTION_LIMIT && curWidth >= H_DIRECTION_LIMIT;
            const f2 = oldWidth >= H_DIRECTION_LIMIT && curWidth <= V_DIRECTION_LIMIT;
            if (f1 || f2) {
                elementRef.current.scrollLeft = 0;
                elementRef.current.scrollTop = 0;
            }
            oldWidth = curWidth;
            setScrollControlData({line: 0, direction: getDirection(curWidth)});
        }

        function scrollHandler() {
            const line = elementRef.current.scrollTop + elementRef.current.scrollLeft;
            setScrollControlData(oldData => ({...oldData, line}));
        }

        elementRef.current.addEventListener('wheel', wheelHandler);
        elementRef.current.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            elementRef.current.removeEventListener('wheel', wheelHandler);
            elementRef.current.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        }
    }, [scrollEnabled]);

    return scrollControlData;
}

export function useVisibleControl(elementRef, line, direction, part, setter, setterValue) {
    useEffect(() => {
        if (!elementRef.current || setterValue) return;
        const {innerWidth, innerHeight} = window;
        const {x, y, width, height} = elementRef.current.getBoundingClientRect();

        if (direction === H_DIRECTION) {
            if ((innerWidth - x) < 0) return;
            const scrolled = (innerWidth - x) / width;
            if (scrolled > part) setter(true);
        }

        if (direction === V_DIRECTION) {
            if ((innerHeight - y) < 0) return;
            const scrolled = (innerHeight - y) / height;
            if (scrolled > part) setter(true);
        }
    }, [line, direction]);
}