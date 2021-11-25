import React, {useContext, useRef, useState} from "react";
import classNames from "classnames";
import {useVisibleControl} from "../../../utils/hooks";
import {appContext} from "../../../utils/context";
import "./AboutMyself.scss";

function AboutMyself() {
    const [hasVisible, setHasVisible] = useState(false);
    const {line, direction} = useContext(appContext);
    const elementRef = useRef(null);

    useVisibleControl(elementRef, line, direction, 1 / 2, setHasVisible, hasVisible);

    const bigTitleClasses = classNames('about_myself__big_title', {'about_myself__big_title_rise': hasVisible});
    const smallTitleClasses = classNames('about_myself__small_title', {'about_myself__small_title_rise': hasVisible});
    const descriptionClasses = classNames('about_myself__description', {'about_myself__description_rise': hasVisible});
    const linksClasses = classNames('about_myself__links', {'about_myself__links_rise': hasVisible});

    return (
        <div className="about_myself" ref={elementRef}>
            <h1 className={bigTitleClasses}>Всем привет, я Tanya Lookas!</h1>
            <h2 className={smallTitleClasses}>Я декоратор-реставратор с десятилетним опытом работы.</h2>
            <h2 className={smallTitleClasses}>Руковожу студией декора &quot;Белый лён&quot;</h2>
            <div className={descriptionClasses}>
                <p>
                    Студия декора Белый лён - это коллектив творческий людей, готовых делиться вдохновением,
                    подсказывать и помогать в оформлении и организации торжеств!
                </p>
                <p>
                    Каждый проект для нас уникален, многие декорации изготавливаются нами индивидуально и
                    вручную - под настроение определенного мероприятия.
                </p>
                <p>
                    Мы приглашаем в группу: дизайнеров, мастеров хенд-мейда, рукодельниц всех видов, фотографов и вообще
                    всех творческих людей к сотрудничеству!
                </p>
                <p>
                    По вопросам сотрудничества и предоставления наших услуг вы можете обратиться по
                    телефону <a href="tel:89180949435" className="about_myself__phone">+7 (918) 094-94-35</a> либо
                    написать нам в соцсетях.
                </p>
            </div>
            <div className={linksClasses}>
                <a className="about_myself__link" href="mailto:tanyalookas@gmail.com">
                    e-mail
                </a>
                <a
                    className="about_myself__link"
                    href="https://vk.com/whitelinen_snk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vk
                </a>
                <a
                    className="about_myself__link"
                    href="https://www.instagram.com/tanya_lookas/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </div>
        </div>
    );
}

export default AboutMyself;