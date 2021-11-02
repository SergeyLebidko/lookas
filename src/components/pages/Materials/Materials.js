import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Materials.scss";

function Materials() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <main className="materials">
            <h1>Я работаю с самыми разными материалами</h1>
            <p>Картон. Гипс. Штукатурка. Полимерная глина. Акрил. Пенопласт. Металл. Дерево. И это далеко не всё... ;)</p>
        </main>
    );
}

export default Materials;