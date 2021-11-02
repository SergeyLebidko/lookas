import React, {useContext, useEffect, useRef} from "react";
import {appContext} from "../../../utils/context";
import "./Learn.scss";

function Learn() {
    const {hasPreloader, line} = useContext(appContext);

    const learnRef = useRef(null);

    useEffect(() => {
        if (!learnRef.current) return;

        console.log(learnRef.current.getBoundingClientRect());

        if (learnRef.current.getBoundingClientRect().x < line) console.log('Learn в зоне видимости');
    }, [line]);

    if (hasPreloader) return null;

    return (
        <main className="learn bordered" ref={learnRef}>
            <h1>Я постоянно прокачиваю свои навыки</h1>
            <p>Участвую в семинарах, конференциях, мастер-классах. Учусь сама и учу других.</p>
        </main>
    );
}

export default Learn;