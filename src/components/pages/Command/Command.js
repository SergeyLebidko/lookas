import React, {useContext, useRef} from "react";
import {useElementVisible} from "../../../utils/hooks";
import {appContext} from "../../../utils/context";
import "./Command.scss";

function Command() {
    const {hasPreloader, line, direction} = useContext(appContext);

    const commandRef = useRef(null);
    useElementVisible(commandRef, 'Command', line, direction);

    if (hasPreloader) return null;

    return (
        <section className="command bordered" ref={commandRef}>
            <h1>Вокруг меня коллектив профессионалов</h1>
            <p>
                Я работаю в команде с флористами, фотографами, ведущими, осветителями,
                другими дизайнерами, настоящими мастерами своего дела
            </p>
        </section>
    );
}

export default Command;