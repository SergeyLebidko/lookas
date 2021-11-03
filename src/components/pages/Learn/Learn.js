import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Learn.scss";

function Learn() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <section className="learn bordered">
            <h1>Я постоянно прокачиваю свои навыки</h1>
            <p>Участвую в семинарах, конференциях, мастер-классах. Учусь сама и учу других.</p>
        </section>
    );
}

export default Learn;