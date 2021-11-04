import {useEffect, useState} from "react";
import {
    V_DIRECTION_LIMIT,
    H_DIRECTION_LIMIT,
    V_DIRECTION,
    H_DIRECTION,
    SCROLL_STEPS_LIMIT,
    SCROLL_TIMING,
    SCROLL_DELTA
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
            if (!scrollEnabled) return;

            // Для вертикальной ориентации экрана управлять скроллингом из js не нужно
            const {innerWidth} = window;
            if (innerWidth <= V_DIRECTION_LIMIT) return;

            // В силу определенных ограничений функции scrollTo из JS, я решил написать свой вариант этой функции
            function scrollTo(delta, steps = 0) {
                const curScrollLeft = elementRef.current.scrollLeft;
                elementRef.current.scrollLeft += delta;
                if (elementRef.current.scrollLeft !== curScrollLeft && steps < SCROLL_STEPS_LIMIT) {
                    setTimeout(() => scrollTo(delta, steps + 1), SCROLL_TIMING);
                }
            }

            const {deltaY} = event;
            if (deltaY < 0) scrollTo(-SCROLL_DELTA,);
            if (deltaY > 0) scrollTo(SCROLL_DELTA,);
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

        elementRef.current.addEventListener('mousewheel', wheelHandler);
        elementRef.current.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            elementRef.current.removeEventListener('mousewheel', wheelHandler);
            elementRef.current.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        }
    }, [scrollEnabled]);

    return scrollControlData;
}

// TODO Тестовый хук определения видимости элемента (раздела) сайта
export function useElementVisible(elementRef, elementName, line, direction) {
    useEffect(() => {
        if (!elementRef.current) return;
        const {innerWidth, innerHeight} = window;
        const {x, y, width, height} = elementRef.current.getBoundingClientRect();

        if (direction === V_DIRECTION) {
            console.log(y < innerHeight && (y + height) > 0 ? `${elementName} виден` : `${elementName} не виден`);
        }
        if (direction === H_DIRECTION) {
            console.log(x < innerWidth && (x + width) > 0 ? `${elementName} виден` : `${elementName} не виден`);
        }
    }, [line, direction]);
}