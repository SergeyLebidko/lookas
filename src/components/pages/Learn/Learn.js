import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Learn.scss";

function Learn() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <main className="learn">
            <h1>Я постоянно прокачиваю свои навыки</h1>
            <p>Участвую в семинарах, конференциях, мастер-классах. Учусь сама и учу других.</p>
        </main>
    );
}

export default Learn;