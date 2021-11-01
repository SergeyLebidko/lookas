import {useEffect, useState} from "react";

export function useCursorPosition(elementRef) {
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0, oldX: 0, oldY: 0});

    useEffect(() => {
        if (!elementRef.current) return;

        function moveHandler(event) {
            setCursorPosition(oldPosition => (
                {
                    x: event.clientX,
                    y: event.clientY,
                    oldX: oldPosition.x,
                    oldY: oldPosition.y
                }
            ));
        }

        elementRef.current.addEventListener('mousemove', moveHandler);

        return () => elementRef.current.removeEventListener('mousemove', moveHandler);
    }, []);

    return cursorPosition;
}

export function useLineControl(elementRef) {
    const [line, setLine] = useState(0);

    useEffect(() => {
        if (!elementRef.current) return;

        function wheelHandler(event) {
            const {deltaY} = event;
            setLine(oldLine => {
                if (deltaY < 0 && oldLine > 0) return oldLine - 1;
                if (deltaY > 0) return oldLine + 1;
                return oldLine;
            });
        }

        elementRef.current.addEventListener('mousewheel', wheelHandler);

        return () => elementRef.current.removeEventListener('mousewheel', wheelHandler);
    }, []);

    return line;
}