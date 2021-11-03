import {useEffect, useState} from "react";
import {V_DIRECTION_LIMIT, H_DIRECTION_LIMIT, V_DIRECTION, H_DIRECTION} from "../constants/settings";
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
            // Для вертикальной ориентации экрана управлять скроллингом из js не нужно
            const {innerWidth} = window;
            if (innerWidth <= V_DIRECTION_LIMIT) return;

            const {deltaY} = event;
            if (deltaY < 0) {
                for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft -= 2, index * 10);
            }
            if (deltaY > 0) {
                for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft += 2, index * 10);
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
    }, []);

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