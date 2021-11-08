import React, {useContext, useRef, useState} from "react";
import classNames from "classnames";
import {appContext} from "../../../utils/context";
import "./Place.scss";
import {useVisibleControl} from "../../../utils/hooks";

function Place(){
    const [hasBig, setHasBig] = useState(false);
    const [hasSmall, setHasSmall] = useState(false);
    const elementRef = useRef(null);

    const {line, direction} = useContext(appContext);

    useVisibleControl(elementRef, line, direction, 3/4, setHasBig, hasBig);
    useVisibleControl(elementRef, line, direction, 3/4, setHasSmall, hasSmall);

    const bigClasses = classNames('place__big_title', {'place__big_title_rise': hasBig});
    const smallClasses = classNames('place__small_title', {'place__small_title_rise': hasSmall});

    return (
        <div className="place" ref={elementRef}>
            <h1 className={bigClasses}>
                Я живу в Славянске-на-Кубани
            </h1>
            <h2 className={smallClasses}>
                Но принимаю заказы и работаю также и в других городах: в Краснодаре, Новороссийске, Анапе, Темрюке,
                Тамани, Геленджике и так далее...
            </h2>
        </div>
    );
}

export default Place;