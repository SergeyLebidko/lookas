import React, {useContext, useRef, useState} from "react";
import classNames from "classnames";
import {appContext} from "../../../utils/context";
import MiniSlider from "../../common/MiniSlider/MiniSlider";
import {useVisibleControl} from "../../../utils/hooks";
import "./Materials.scss";

const MATERIALS = [
    'Гипс',
    'Картон',
    'Штукатурка',
    'Полимерная глина',
    'Акриловые краски',
    'Пенопласт',
    'Металл',
    'Дерево',
    'Ткань'
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
    const getItemClasses = index => 'materials__list_item ' + (hasList ? `materials__list_item_${index}_rise` : '');

    return (
        <section className="materials" ref={elementRef}>
            <MiniSlider/>
            <h1 className={bigClasses}>
                Я работаю с самыми разными материалами!
            </h1>
            <ul className="materials__list">
                {MATERIALS.map((title, index) => <li key={title} className={getItemClasses(index)}>{title}</li>)}
            </ul>
            <h2 className={smallClasses}>
                И это далеко не всё!...
            </h2>
        </section>
    );
}

export default Materials;