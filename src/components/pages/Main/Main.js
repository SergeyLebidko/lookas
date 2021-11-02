import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Main.scss";

function Main() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <main className="main bordered">
            <h1>Tanya Lookas</h1>
            <p>design & decor</p>
        </main>
    );
}

export default Main;