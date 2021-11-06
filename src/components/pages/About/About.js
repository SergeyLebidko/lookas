import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import avatar from "../../../content/images/avatar.jpg";
import wl from "../../../content/images/wl.jpg";
import {appContext} from "../../../utils/context";
import "./About.scss";

function About() {
    const [avatarVisible, setAvatarVisible] = useState(false);
    const {line, imgLoadHandler} = useContext(appContext);

    useEffect(() => {
        if (line > 300) setAvatarVisible(true);
    }, [line])

    const imageBlocClasses = classNames('about__image_block', {'about__image_block_rised': avatarVisible});

    return (
        <section className="about">
            <div className={imageBlocClasses}>
                <img className="about__avatar" src={avatar} onLoad={imgLoadHandler}/>
                <img className="about__wl" src={wl} onLoad={imgLoadHandler}/>
            </div>
            <div className="about__title_block">
                <h1 className="about__big_title">Всем привет, я Tanya Lookas!</h1>
                <h2 className="about__small_title">Я декоратор-реставратор с десятилетним опытом работы.</h2>
                <h2 className="about__small_title">Руковожу студией декора &quot;Белый лён&quot;</h2>
                <a className="about__wl_anchor" href="https://vk.com/whitelinen_snk">White linen</a>
            </div>
        </section>
    );
}

export default About;