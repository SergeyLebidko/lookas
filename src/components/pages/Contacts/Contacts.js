import React, {useContext} from "react";
import {appContext} from "../../../utils/context";
import "./Contacts.scss";

function Contacts() {
    const {hasPreloader} = useContext(appContext);
    if (hasPreloader) return null;

    return (
        <section className="contacts bordered">
            <h1>Связаться со мной можно тут</h1>
            <p>...здесь будет список ссылок на vk, instagram, telegram, whatsapp, email...</p>
        </section>
    );
}

export default Contacts;