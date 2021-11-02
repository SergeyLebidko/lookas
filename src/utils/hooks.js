import {useEffect} from "react";

export function useScrollControl(elementRef) {
    useEffect(() => {
        if (!elementRef.current) return;

        function wheelHandler(event) {
            const {deltaY} = event;
            if (deltaY < 0) {
                if (window.innerWidth < 1024) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollTop -= 2, index * 10);
                } else {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft -= 2, index * 10);
                }
            }
            if (deltaY > 0) {
                if (window.innerWidth < 1024) {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollTop += 2, index * 10);
                } else {
                    for (let index = 0; index < 30; index++) setTimeout(() => elementRef.current.scrollLeft += 2, index * 10);
                }
            }
        }

        elementRef.current.addEventListener('mousewheel', wheelHandler);

        return () => elementRef.current.removeEventListener('mousewheel', wheelHandler);
    }, []);
}