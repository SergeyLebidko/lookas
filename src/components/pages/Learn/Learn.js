import React, {useContext, useEffect, useRef} from "react";
import {appContext} from "../../../utils/context";
import "./Learn.scss";
import {H_DIRECTION, V_DIRECTION} from "../../../constants/settings";

function Learn() {
    const {hasPreloader, line, direction} = useContext(appContext);

    const learnRef = useRef(null);

    useEffect(() => {
        if (!learnRef.current) return;
        const {innerWidth, innerHeight} = window;
        const {x, y, width, height} = learnRef.current.getBoundingClientRect();

        if (direction === V_DIRECTION) {
            console.log(y < innerHeight && (y + height) > 0 ? 'Learn виден' : 'Learn не виден');
        }
        if (direction === H_DIRECTION) {
            console.log(x < innerWidth && (x + width) > 0 ? 'Learn виден' : 'Learn не виден');
        }
    }, [line, direction]);

    if (hasPreloader) return null;

    return (
        <main className="learn bordered" ref={learnRef}>
            <h1>Я постоянно прокачиваю свои навыки</h1>
            <p>Участвую в семинарах, конференциях, мастер-классах. Учусь сама и учу других.</p>
        </main>
    );
}

export default Learn;