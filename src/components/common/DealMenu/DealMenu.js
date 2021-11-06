import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import DealCard from "../DealCard/DealCard";
import design from "../../../content/images/design.jpg";
import decor from "../../../content/images/decor.jpg";
import restoration from "../../../content/images/restoration.jpg";
import {appContext} from "../../../utils/context";
import "./DealMenu.scss";

const MENU_DATA = [
    {
        id: 'des',
        title: 'Дизайн',
        imgSource: design
    },
    {
        id: 'dec',
        title: 'Декор',
        imgSource: decor
    },
    {
        id: 'res',
        title: 'Реставрация',
        imgSource: restoration
    }
]

function DealMenu() {
    const [selected, setSelected] = useState(null);
    const {line} = useContext(appContext);

    useEffect(() => {
        if (line > 100) setSelected(null);
    }, [line]);

    const getItemClasses = id => classNames('deal_menu__item', {'deal_menu_selected_item': id === selected});

    const selectHandler = id => {
        if (id === selected) {
            setSelected(null);
            return;
        }
        setSelected(id);
    }

    return (
        <>
            {MENU_DATA.map(
                ({id, imgSource}) =>
                    <DealCard
                        key={id}
                        imgSource={imgSource}
                        hasSelect={selected === id}
                    />
            )}
            <ul className="deal_menu">
                {MENU_DATA.map(
                    ({id, title}) =>
                        <li
                            key={id}
                            className={getItemClasses(id)}
                            onClick={() => selectHandler(id)}
                        >
                            {title}
                        </li>
                )}
            </ul>
        </>
    );
}

export default DealMenu;