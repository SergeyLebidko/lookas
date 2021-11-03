import {useEffect, useState} from "react";
import {V_DIRECTION_LIMIT, H_DIRECTION_LIMIT} from "../constants/settings";
import {getDirection} from "./utils";

export function useScrollControl(elementRef) {
    const [scrollControlData, setScrollControlData] = useState(
        {
            line: 0,
            direction: getDirection(window.innerWidth)
        }
    );

    useEffect(() => {
        if (!elementRef.current) return;

        function wheelHandler(event) {
            const {deltaY} = event;
            const {innerWidth} = window;
            if (deltaY < 0) {
                if (innerWidth <= V_DIRECTION_LIMIT) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollTop -= 2, index * 10);
                }
                if (innerWidth >= H_DIRECTION_LIMIT) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft -= 2, index * 10);
                }
            }
            if (deltaY > 0) {
                if (innerWidth <= V_DIRECTION_LIMIT) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollTop += 2, index * 10);
                }
                if (innerWidth >= H_DIRECTION_LIMIT) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft += 2, index * 10);
                }
            }
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
            const line = elementRef.current.scrollTop + elementRef.current.scrollLeft
            setScrollControlData(oldData => ({...oldData, line}));
        }

        elementRef.current.addEventListener('mousewheel', wheelHandler);
        elementRef.current.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            elementRef.current.removeEventListener('mousewheel', wheelHandler);
            elementRef.current.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    return scrollControlData;
}