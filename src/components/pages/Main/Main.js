import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Main.scss";

function Main() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    // TODO Код для проверки работы scrollIntoView
    const testScroll = () => {
        const command = document.getElementById('command');
        command.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <section className="main bordered">
            <h1 onClick={testScroll}>Tanya Lookas</h1>
            <p>design & decor</p>
        </section>
    );
}

export default Main;