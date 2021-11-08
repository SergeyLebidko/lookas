import React, {useContext, useRef, useState} from "react";
import {appContext} from "../../../utils/context";
import "./Materials.scss";
import classNames from "classnames";
import {useVisibleControl} from "../../../utils/hooks";

const MATERIALS = [
    {
        title: 'Картон'
    },
    {
        title: 'Гипс'
    },
    {
        title: 'Штукатурка'
    },
    {
        title: 'Полимерная глина'
    },
    {
        title: 'Акриловые краски'
    },
    {
        title: 'Пенопласт'
    },
    {
        title: 'Металл'
    },
    {
        title: 'Дерево'
    },
    {
        title: 'Ткань'
    }
]

function Materials() {
    const [hasBig, setHasBig] = useState(false);
    const [hasSmall, setHasSmall] = useState(false);
    const [hasList, setHasList] = useState(false);

    const elementRef = useRef(null);

    const {line, direction} = useContext(appContext);

    useVisibleControl(elementRef, line, direction, 1 / 3, setHasBig, hasBig);
    useVisibleControl(elementRef, line, direction, 1 / 3, setHasSmall, hasSmall);
    useVisibleControl(elementRef, line, direction, 1 / 3, setHasList, hasList);

    const bigClasses = classNames('materials__big_title', {'materials__big_title_rise': hasBig});
    const smallClasses = classNames('materials__small_title', {'materials__small_title_rise': hasSmall});
    const listClasses = classNames('materials__list', {'materials__list_rise': hasList});

    return (
        <section className="materials" ref={elementRef}>
            <h1 className={bigClasses}>
                Я работаю с самыми разными материалами!
            </h1>
            <ul className={listClasses}>
                {MATERIALS.map(({title}) => <li key={title}>{title}</li>)}
            </ul>
            <h2 className={smallClasses}>
                И это далеко не всё!...
            </h2>
        </section>
    );
}

export default Materials;